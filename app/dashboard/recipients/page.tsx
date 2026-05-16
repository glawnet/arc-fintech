'use client';

import { useState } from "react";
import { IconUserPlus, IconEdit, IconTrash, IconSend } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RecipientsPage() {
  const [recipients, setRecipients] = useState([
    { id: 1, name: "Adewale Okafor", email: "adewale@example.com", address: "0x742d35Cc...a3d", country: "Nigeria", lastPayout: "2 days ago" },
    { id: 2, name: "Fatima Ahmed", email: "fatima@company.co", address: "0x8Ba7e...f2c", country: "Kenya", lastPayout: "1 week ago" },
    { id: 3, name: "TechMart Supplies", email: "accounts@techmart.ng", address: "0x71C7...9b3", country: "Nigeria", lastPayout: "Yesterday" },
  ]);

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Recipients</h1>
          <p className="text-muted-foreground mt-1">Manage who you send money to</p>
        </div>
        <Button className="gap-2">
          <IconUserPlus size={18} />
          Add Recipient
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">All Recipients ({recipients.length})</h2>
          <Button variant="outline">Import from CSV</Button>
        </div>

        <div className="space-y-4">
          {recipients.map((recipient) => (
            <div key={recipient.id} className="flex items-center justify-between p-5 border border-border rounded-2xl hover:bg-muted/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-semibold">
                  {recipient.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-lg">{recipient.name}</p>
                  <p className="text-sm text-muted-foreground">{recipient.email}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{recipient.address}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-muted-foreground">Last payout</p>
                <p className="text-sm">{recipient.lastPayout}</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline">
                    <IconSend size={16} />
                  </Button>
                  <Button size="sm" variant="outline">
                    <IconEdit size={16} />
                  </Button>
                  <Button size="sm" variant="outline">
                    <IconTrash size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
