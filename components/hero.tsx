/**
 * Copyright 2026 Circle Internet Group, Inc.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Zap,
  CheckCircle,
  Wallet,
  Globe,
  ArrowRightLeft,
  Clock,
  Users,
} from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col items-center w-full px-5">
      {/* Hero Section */}
      <section className="w-full max-w-6xl space-y-16 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            ⚡ Live on Arc Testnet
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Global Payments.<br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              One Treasury.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            The all-in-one platform for cross-border payouts, treasury management, 
            and programmable finance — built on Arc with Circle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg px-10 py-7 rounded-2xl">
                Get Started Free
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-2xl">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>Instant Settlement</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>Cross-Border Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span>Compliant & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-6xl py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Built for Real Business Needs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="w-10 h-10 text-emerald-500" />}
            title="Global Payouts"
            description="Send money to freelancers, suppliers, and teams in 100+ countries instantly with USDC."
          />
          <FeatureCard
            icon={<Wallet className="w-10 h-10 text-indigo-500" />}
            title="Smart Treasury"
            description="Unified dashboard to manage, rebalance, and grow your stablecoin treasury across chains."
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10 text-purple-500" />}
            title="Automation"
            description="Set up recurring payments, approval workflows, and smart rules that run 24/7."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-5xl py-20 text-center border-t border-border">
        <h2 className="text-4xl font-bold mb-6">Ready to Forge Better Finance?</h2>
        <p className="text-xl text-muted-foreground mb-10">
          Join businesses already moving money faster and cheaper on Arc.
        </p>
        <Link href="/auth/sign-up">
          <Button size="lg" className="text-lg px-12 py-7 rounded-2xl">
            Start Building on Payforge →
          </Button>
        </Link>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
