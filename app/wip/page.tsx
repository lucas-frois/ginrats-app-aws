"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Wine,
  Hammer,
  HardHat,
  Wrench,
  Coffee,
  Zap,
  Mail,
  Github,
  Twitter,
  ArrowLeft,
  Home,
} from "lucide-react";
import { useForm } from "@formspree/react";

function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hammerPosition, setHammerPosition] = useState(0);

  // Animated hammer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHammerPosition((prev) => (prev === 0 ? -10 : 0));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleBack = () => {
    window.location.href = "/";
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (email) {
        const response = await fetch("https://formspree.io/f/xkgbweal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            message: "Novo lead interessado!",
          }),
        });
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setEmail("");
        }, 10000);
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50 flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/80 border-b sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBack}
            className="flex items-center gap-2 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        <div className="flex items-center justify-center flex-1">
          <Wine className="h-8 w-8 text-purple-600" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
            GinRats
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Home className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        {/* Floating construction tools */}
        <div className="absolute inset-0 pointer-events-none">
          <Wrench
            className="absolute top-20 left-10 h-8 w-8 text-amber-300 opacity-20 animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <HardHat className="absolute top-32 right-20 h-6 w-6 text-yellow-400 opacity-30 animate-bounce" />
          <Coffee className="absolute bottom-40 left-1/4 h-5 w-5 text-amber-500 opacity-25 animate-pulse" />
          <Zap className="absolute bottom-20 right-1/3 h-7 w-7 text-purple-400 opacity-20 animate-ping" />
        </div>

        <div className="text-center max-w-2xl mx-auto relative z-10">
          {/* Main illustration */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              {/* Main wine glass */}
              <Wine className="h-32 w-32 text-purple-600 mx-auto" />

              {/* Animated hammer */}
              <div
                className="absolute -top-4 -right-4 transition-transform duration-200"
                style={{
                  transform: `translateY(${hammerPosition}px) rotate(45deg)`,
                }}
              >
                <Hammer className="h-12 w-12 text-amber-600" />
              </div>

              {/* Hard hat on top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <HardHat className="h-16 w-16 text-yellow-500" />
              </div>

              {/* Construction sparks */}
              <div className="absolute top-8 right-2">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                  <div
                    className="w-1 h-1 bg-orange-400 rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-red-400 rounded-full animate-ping"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
              GinRats
            </span>
          </h1>

          {/* Under construction message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Wrench className="h-6 w-6 text-amber-600 animate-spin" />
              Under Construction
              <Hammer className="h-6 w-6 text-gray-600 animate-bounce" />
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're building something{" "}
              <span className="font-semibold text-purple-600">epic</span> for
              tracking your drinking habits!
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg max-w-md mx-auto">
              <p className="text-yellow-800 text-sm">
                🚧 <strong>Construction Zone:</strong> Our developers are
                working around the clock (with lots of coffee) to bring you the
                best social drinking tracker!
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>73%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-amber-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "73%" }}
              >
                <div className="h-full bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Fun facts */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">1,247</div>
              <div className="text-gray-600">Lines of code written</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">42</div>
              <div className="text-gray-600">Cups of coffee consumed</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100">
              <div className="text-2xl font-bold text-green-600">∞</div>
              <div className="text-gray-600">Bugs fixed (hopefully)</div>
            </div>
          </div>

          {/* Email signup */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg max-w-md mx-auto mb-8">
            {!submitted ? (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Get notified when we launch!
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700"
                  >
                    Notify Me! 🚀
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">
                  Awesome!
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll let you know when GinRats is ready to party!
                </p>
              </div>
            )}
          </div>

          {/* Back button alternative */}
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={handleBack}
              className="bg-white/60 backdrop-blur-sm hover:bg-white/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to main page
            </Button>
          </div>

          {/* Footer message */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              Meanwhile, practice your responsible drinking! 🍻
            </p>
            <p className="text-xs text-gray-400">
              Expected launch: Soon™ (we promise it's worth the wait)
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Wine className="h-5 w-5 text-purple-600" />
              <p className="text-sm text-gray-600">
                © 2024 GinRats. Under construction with love and lots of coffee
                ☕
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Follow us:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
