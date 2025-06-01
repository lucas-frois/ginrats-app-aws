import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wine,
  Users,
  Camera,
  MapPin,
  Trophy,
  Calendar,
  Star,
  Download,
  Menu,
  Shield,
  Play,
  Apple,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/80 border-b sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Wine className="h-8 w-8 text-purple-600" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
            GinRats
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#community"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Community
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Download
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="ml-4 md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-purple-100 text-purple-700"
                  >
                    🍸 Track • Share • Compete
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Drinking Habits,{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                      Socially Tracked
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join the community that's changing how we track drinking
                    habits. Whether you're celebrating sobriety milestones or
                    sharing your night out adventures, GinRats makes it social,
                    fun, and accountable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#download">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </Button>
                  </Link>
                  <Link href="#download">
                    <Button variant="outline" size="lg">
                      Watch Demo
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                  </div>
                  <span>•</span>
                  <span>10K+ active users</span>
                  <span>•</span>
                  <span>Free to download</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-amber-400 rounded-3xl blur-3xl opacity-20"></div>
                  <Image
                    src="/ginrats-logo-nobg.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="GinRats App"
                    className="relative rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  Core Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Track & Share
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From sobriety milestones to social drinking adventures,
                  GinRats has the tools to make your journey social and
                  accountable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">
                      Track Your Drinking Habits
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Log every drink, track patterns, and monitor your
                    consumption with detailed analytics. Set goals for sobriety
                    streaks or moderate drinking targets.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Daily, weekly, monthly tracking
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Sobriety streak counters
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Detailed consumption analytics
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-amber-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">
                      Share with Friends
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Connect with friends for accountability and support.
                    Celebrate sobriety milestones together or share your social
                    drinking experiences safely.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Private friend groups
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Sobriety support networks
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Social drinking accountability
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Camera className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">
                      Post Pics & Location
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Share photos and locations to prove your progress. Document
                    your sober activities or responsibly share your social
                    experiences with location verification.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Photo verification system
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Location-based check-ins
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Progress documentation
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-amber-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-white/80">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple Steps to Get Started
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Download & Sign Up</h3>
                <p className="text-gray-500">
                  Get the app and create your profile. Set your goals - whether
                  it's sobriety, moderation, or social accountability.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Track & Share</h3>
                <p className="text-gray-500">
                  Log your drinking habits, share photos and locations, and
                  connect with friends for support and accountability.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Compete & Celebrate</h3>
                <p className="text-gray-500">
                  Earn achievements, compete with friends, and celebrate
                  milestones together in a supportive community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section
          id="community"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-purple-100 text-purple-700"
                  >
                    Community Driven
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join a Supportive Community
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                    Whether you're on a sobriety journey or practicing mindful
                    drinking, our community supports every path. Share your
                    wins, get encouragement, and stay accountable together.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <div>
                      <h4 className="font-semibold">Achievement System</h4>
                      <p className="text-sm text-gray-500">
                        Unlock badges and celebrate milestones
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-blue-500" />
                    <div>
                      <h4 className="font-semibold">Support Groups</h4>
                      <p className="text-sm text-gray-500">
                        Connect with like-minded individuals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-green-500" />
                    <div>
                      <h4 className="font-semibold">Local Events</h4>
                      <p className="text-sm text-gray-500">
                        Find sober activities near you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="h-8 w-8 text-purple-500" />
                    <div>
                      <h4 className="font-semibold">Photo Challenges</h4>
                      <p className="text-sm text-gray-500">
                        Document your journey visually
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/social-gr.png?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Community Features"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-pink-600"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download GinRats today and take control of your drinking
                  habits with the support of a community.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/wip">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Apple className="mr-2 h-5 w-5" />
                    Download for iOS
                  </Button>
                </Link>

                <Link href="/wip">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Download for Android
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-purple-100">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>Privacy Protected</span>
                </div>
                <div>Free to Download</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <Wine className="h-5 w-5 text-purple-600" />
          <p className="text-xs text-gray-500">
            © 2024 GinRats. All rights reserved.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/support"
            className="text-xs hover:underline underline-offset-4 text-gray-500"
          >
            Support
          </Link>
        </nav>
      </footer>
    </div>
  );
}
