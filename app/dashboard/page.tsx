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

'use client';

import { useState } from "react";
import { 
  IconPlus, 
  IconWallet, 
  IconSend, 
  IconTrendingUp 
} from "@tabler/icons-react";

import { AddFundsDialog } from "@/components/add-funds-dialog";
import { NewWalletDialog } from "@/components/new-wallet-dialog";
import { RebalanceButton } from "@/components/rebalance-button";
import { SendButton } from "@/components/send-button";
import { TransferDialog } from "@/components/transfer-dialog";
import { Button } from "@/components/ui/button";
import { useBalanceContext } from "@/lib/contexts/balance-context";

export default function DashboardPage() {
  const { walletTotal, gatewayTotal, isLoadingWallet } = useBalanceContext();
  const [isCreateWalletOpen, setCreateWalletOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 md:p-8 space-y-10">
      <NewWalletDialog open={isCreateWalletOpen} onOpenChange={setCreateWalletOpen} />

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-semibold tracking-tighter">Treasury Overview</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Global payments • Smart treasury • Built on Arc
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-muted-foreground uppercase tracking-widest">Total Balance</p>
          <p className="text-5xl font-semibold mt-1 text-white">
            ${walletTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="flex flex-wrap gap-3">
        <TransferDialog />
        <SendButton />
        <RebalanceButton />
        <AddFundsDialog />
        <Button onClick={() => setCreateWalletOpen(true)} className="gap-2">
          <IconPlus size={18} />
          New Wallet
        </Button>
      </div>

      {/* Balances */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Arc Testnet", "Base Sepolia", "Avalanche Fuji", "Ethereum Sepolia"].map((chain, i) => (
          <div key={i} className="bg-card border border-border/80 rounded-3xl p-6 hover:border-primary/50 transition-all">
            <p className="text-muted-foreground text-sm">{chain}</p>
            <p className="text-4xl font-semibold mt-4">$0.00</p>
            <div className="flex items-center gap-1 text-emerald-500 text-sm mt-4">
              <IconTrendingUp size={16} /> 0% this month
            </div>
          </div>
        ))}
      </div>

      {/* Credit Teaser */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-emerald-950 border border-indigo-500/30 rounded-3xl p-10 relative overflow-hidden">
        <div className="max-w-lg">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            Phase 3 • Coming Soon
          </div>
          <h2 className="text-4xl font-semibold leading-tight">
            Onchain Credit &amp; Financing
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Get instant credit lines and invoice financing based on your real payment history and treasury activity.
          </p>
          <Button size="lg" className="mt-8" variant="outline">
            Join the Waitlist →
          </Button>
        </div>
      </div>
    </div>
  );
}