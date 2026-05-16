'use client';

import { useState } from "react";
import { IconSend, IconUsers, IconClock, IconPlus } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PayoutsPage() {
  const [showNewPayout, setShowNewPayout] = useState(false);

  const recentPayouts = [
    { id: 1, recipient: "Freelancer • Adewale O.", amount: "450.00", status: "Completed", time: "2 hours ago" },
    { id: 2, recipient: "Supplier • TechMart Ltd", amount: "1250.00", status: "Completed", time: "Yesterday" },
    { id: 3, recipient: "Team Salary • Q2 Payroll", amount: "8750.00", status: "Pending", time: "3 days ago" },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Payouts</h1>
          <p className="text-muted-foreground mt-1">Send money globally • Instant • Low cost</p>
        </div>
        <Button onClick={() => setShowNewPayout(true)} className="gap-2">
          <IconSend size={18} />
          New Payout
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <p className="text-muted-foreground">Total Payouts This Month</p>
          <p className="text-4xl font-semibold mt-3">$12,450</p>
        </Card>
        <Card className="p-6">
          <p className="text-muted-foreground">Average Payout Time</p>
          <p className="text-4xl font-semibold mt-3 text-emerald-500">8s</p>
        </Card>
        <Card className="p-6">
          <p className="text-muted-foreground">Active Recipients</p>
          <p className="text-4xl font-semibold mt-3">18</p>
        </Card>
      </div>

      {/* New Payout Button Area */}
      <Card className="p-8 border-dashed border-2 hover:border-primary/50 transition-all cursor-pointer" onClick={() => setShowNewPayout(true)}>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
            <IconSend className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold">Make a New Payout</h3>
          <p className="text-muted-foreground mt-2 max-w-sm">Send USDC instantly to anyone in the world</p>
          <Button size="lg" className="mt-6">Start Payout</Button>
        </div>
      </Card>

      {/* Recent Payouts */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recent Payouts</h2>
          <Button variant="outline">View All Payouts</Button>
        </div>

        <div className="space-y-4">
          {recentPayouts.map((payout) => (
            <Card key={payout.id} className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <IconUsers />
                </div>
                <div>
                  <p className="font-medium">{payout.recipient}</p>
                  <p className="text-sm text-muted-foreground">{payout.time}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">${payout.amount}</p>
                <p className={`text-sm ${payout.status === 'Completed' ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {payout.status}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
