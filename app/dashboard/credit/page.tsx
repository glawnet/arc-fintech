'use client';

import { IconCreditCard, IconClock, IconCheckCircle } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CreditPage() {
  return (
    <div className="p-6 md:p-8 space-y-10">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">Credit & Financing</h1>
        <p className="text-muted-foreground mt-2">Access capital based on your onchain activity</p>
      </div>

      {/* Hero Teaser */}
      <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-600 border-0 p-12 text-white relative overflow-hidden">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            <IconClock className="w-4 h-4" />
            Phase 3 • Coming Soon
          </div>
          
          <h2 className="text-5xl font-bold leading-tight">
            Unlock Onchain Credit Lines
          </h2>
          <p className="text-xl mt-6 text-white/90">
            Get instant financing based on your treasury history, payout volume, and payment reputation on Payforge.
          </p>

          <div className="flex gap-4 mt-10">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-8">
          <IconCreditCard className="w-12 h-12 text-indigo-500 mb-6" />
          <h3 className="text-2xl font-semibold">Invoice Financing</h3>
          <p className="text-muted-foreground mt-3">
            Get paid instantly on approved invoices using your payment history.
          </p>
        </Card>

        <Card className="p-8">
          <IconCheckCircle className="w-12 h-12 text-emerald-500 mb-6" />
          <h3 className="text-2xl font-semibold">Revolving Credit</h3>
          <p className="text-muted-foreground mt-3">
            Flexible credit lines that grow with your business activity.
          </p>
        </Card>

        <Card className="p-8">
          <IconClock className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-semibold">Instant Approval</h3>
          <p className="text-muted-foreground mt-3">
            No paperwork. Approval based on your real onchain treasury & payout data.
          </p>
        </Card>
      </div>

      {/* Coming Soon Status */}
      <Card className="p-10 text-center">
        <h3 className="text-3xl font-semibold">Credit Features Launching Soon</h3>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          Early users who build strong payment history on Payforge will get priority access and better rates.
        </p>
        <Button size="lg" className="mt-8">
          Get Early Access
        </Button>
      </Card>
    </div>
  );
}
