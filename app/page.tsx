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

import { Hero } from "@/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Payforge
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="#features" className="hover:text-white/70 transition">Features</Link>
            <Link href="#how-it-works" className="hover:text-white/70 transition">How it Works</Link>
            <Link href="/dashboard" className="hover:text-white/70 transition">Dashboard</Link>
            <Link 
              href="/auth/sign-up" 
              className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Trust Bar */}
      <div className="border-b border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-center items-center gap-12 text-sm text-muted-foreground">
          <div>Built on Arc</div>
          <div>Powered by Circle</div>
          <div>USDC Native</div>
          <div>Instant Settlement</div>
        </div>
      </div>
    </main>
  );
}
