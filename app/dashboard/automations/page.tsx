'use client';

import { useState } from "react";
import { IconRobot, IconPlus, IconToggleRight, IconToggleLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AutomationsPage() {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: "Weekly Freelancer Payroll",
      description: "Pay all active freelancers every Friday at 12pm",
      status: "Active",
      lastRun: "2 days ago",
      nextRun: "in 3 days"
    },
    {
      id: 2,
      name: "Low Balance Alert",
      description: "Notify me when total treasury balance falls below $5,000",
      status: "Active",
      lastRun: "Yesterday",
      nextRun: "Continuous"
    },
    {
      id: 3,
      name: "Auto Rebalance",
      description: "Keep 40% USDC on Arc Testnet, 60% on Base",
      status: "Paused",
      lastRun: "5 days ago",
      nextRun: "—"
    },
  ]);

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Automations</h1>
          <p className="text-muted-foreground mt-1">Set it and forget it — Let Payforge work for you</p>
        </div>
        <Button className="gap-2">
          <IconPlus size={18} />
          New Automation
        </Button>
      </div>

      <div className="grid gap-6">
        {automations.map((automation) => (
          <Card key={automation.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                  <IconRobot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{automation.name}</h3>
                  <p className="text-muted-foreground mt-1">{automation.description}</p>
                  
                  <div className="flex gap-4 mt-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Last run:</span> {automation.lastRun}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Next run:</span> {automation.nextRun}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <Badge variant={automation.status === "Active" ? "default" : "secondary"}>
                  {automation.status}
                </Badge>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    {automation.status === "Active" ? "Pause" : "Activate"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Coming Soon Banner */}
      <Card className="p-12 text-center border-dashed">
        <IconRobot className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-2xl font-semibold">More Powerful Automations Coming Soon</h3>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          AI-powered rules, conditional payments, approval workflows, and smart treasury management.
        </p>
        <Button className="mt-6" variant="outline">
          Join Waitlist for Early Access
        </Button>
      </Card>
    </div>
  );
}
