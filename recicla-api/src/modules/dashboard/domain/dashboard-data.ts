export type DashboardData = {
  recoverersThisMonth: number;
  totalKgThisMonth: number;
  pendingAmount: number;
  pendingPaymentRequests: number;
  completedPaymentsAmount: number;
  materials: {
    name: string;
    totalKg: number;
  }[];
};
