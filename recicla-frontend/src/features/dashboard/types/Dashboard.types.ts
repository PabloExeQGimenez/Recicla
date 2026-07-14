export interface DashboardMaterial {
  name: string;
  totalKg: number;
  share: number;
}

export interface DashboardKpi {
  label: string;
  value: string;
  hint: string;
  progress: number;
  icon: string;
  highlight?: boolean;
  trend?: {
    direction: "up" | "down" | "flat";
    percentage: number;
  };
  sparkline?: number[];
}

export interface DashboardData {
  recoverersThisMonth: number;
  totalKgThisMonth: number;
  pendingAmount: number;
  pendingPaymentRequests: number;
  materials: DashboardMaterial[];
}

export type DashboardStatus = "loading" | "error" | "empty" | "success";
