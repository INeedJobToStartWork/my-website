import { Button, ProfileLayout, Highlighter } from "@/components";

//----------------------
// Page
//----------------------

export default function Home() {
  return (
    <main>
      <section>
        <ProfileLayout />
        <div className="wrapper">
          <p className="font-sm">
            I&apos;m 21 years old{" "}
            <Highlighter action="underline" color="#FF9800">
              Full-Stack
            </Highlighter>{" "}
            developer specializing in implementations.
          </p>
        </div>
      </section>
    </main>
  );
}
