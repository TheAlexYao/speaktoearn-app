
export type AlertType = 'task_opportunity' | 'payment' | 'achievement' | 'review';
export type AlertStatus = 'read' | 'unread';
export type AlertPriority = 'urgent' | 'normal' | 'low';

export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  timePosted: Date;
  status: AlertStatus;
  priority: AlertPriority;
  pinned?: boolean;
  metadata?: {
    reward?: string;
    txHash?: string;
    taskId?: string;
    deadline?: Date;
  };
  actions?: {
    primary?: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      action: () => void;
    };
  };
}
