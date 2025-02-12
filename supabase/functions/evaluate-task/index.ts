
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EvaluationRequest {
  submissionId: string;
  taskType: 'paraphrase' | 'factual';
  originalText: string;
  responseText: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { submissionId, taskType, originalText, responseText }: EvaluationRequest = await req.json();
    console.log('Evaluating submission:', { submissionId, taskType, originalText, responseText });

    // Prepare system prompt based on task type
    const systemPrompt = taskType === 'paraphrase' 
      ? "You are an expert evaluator of paraphrasing quality. Grade submissions on clarity, accuracy, and natural language use. Provide specific feedback."
      : "You are an expert fact-checker. Grade submissions on accuracy, clarity of explanation, and proper correction of misinformation. Provide specific feedback.";

    // Prepare evaluation prompt
    const userPrompt = `
Task: ${taskType === 'paraphrase' ? 'Paraphrase the text while maintaining its meaning' : 'Correct the factual error and explain the correction'}

Original text: "${originalText}"
User's response: "${responseText}"

Evaluate the response and provide:
1. A score from 0-100
2. Specific feedback on the quality
3. Whether it passes (score >= 70)

Format your response as a JSON object with these exact keys:
{
  "score": number,
  "feedback": string,
  "passed": boolean
}`;

    // Call GPT-4o for evaluation
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!openAIResponse.ok) {
      throw new Error(`OpenAI API error: ${await openAIResponse.text()}`);
    }

    const aiResponse = await openAIResponse.json();
    const evaluation = JSON.parse(aiResponse.choices[0].message.content);
    console.log('AI Evaluation:', evaluation);

    // Update submission in database
    const { error: updateError } = await supabase
      .from('task_submissions')
      .update({
        score: evaluation.score,
        feedback: evaluation.feedback,
        status: 'evaluated'
      })
      .eq('id', submissionId);

    if (updateError) {
      throw new Error(`Database update error: ${updateError.message}`);
    }

    return new Response(
      JSON.stringify(evaluation),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Error in evaluate-task function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
});
