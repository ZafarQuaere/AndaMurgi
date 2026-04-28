import { Reveal } from "@/components/motion/Reveal";

export function AboutCredentials() {
  return (
    <Reveal
      className="mx-auto max-w-screen-2xl px-6 py-32 md:px-12"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-8 rounded-[3rem] bg-[#dde4e3] p-12 lg:col-span-8">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#4f6359]">school</span>
            <h3 className="font-headline text-3xl font-bold text-[#2d3433]">
              Educational Background
            </h3>
          </div>
          <div className="space-y-8">
            <div className="flex justify-between border-b border-[#acb3b2]/20 pb-6">
              <div>
                <h5 className="font-headline text-xl font-bold text-[#2d3433]">
                  Ph.D. in Clinical Psychology
                </h5>
                <p className="text-[#596060]">Stanford University</p>
              </div>
              <span className="font-medium text-[#4f6359]">2008</span>
            </div>
            <div className="flex justify-between border-b border-[#acb3b2]/20 pb-6">
              <div>
                <h5 className="font-headline text-xl font-bold text-[#2d3433]">
                  M.S. in Counseling Psychology
                </h5>
                <p className="text-[#596060]">Columbia University</p>
              </div>
              <span className="font-medium text-[#4f6359]">2004</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="font-headline text-xl font-bold text-[#2d3433]">
                  B.A. in Psychology &amp; Sociology
                </h5>
                <p className="text-[#596060]">
                  University of Pennsylvania
                </p>
              </div>
              <span className="font-medium text-[#4f6359]">2002</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[3rem] bg-[#4f6359] p-12 text-[#e8fef1] lg:col-span-4">
          <div className="space-y-6">
            <span className="material-symbols-outlined text-4xl">
              workspace_premium
            </span>
            <h3 className="font-headline text-3xl font-bold">Certifications</h3>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-sm">
                  check_circle
                </span>
                <span>Board Certified Behavior Analyst (BCBA-D)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-sm">
                  check_circle
                </span>
                <span>Certified Trauma Professional (CTP)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-sm">
                  check_circle
                </span>
                <span>Advanced Mindfulness Practitioner</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-[3rem] bg-[#f6e2cf]/40 p-12 lg:col-span-12">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="md:w-1/3">
              <h3 className="font-headline text-3xl font-bold text-[#5e5143]">
                Professional Associations
              </h3>
              <p className="mt-2 text-[#5e5143]/70">
                Active member and contributor to leading global psychological
                institutions.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-8 opacity-70 grayscale md:w-2/3 md:grid-cols-4">
              {[
                { icon: "groups" as const, label: "APA" },
                { icon: "neurology" as const, label: "ABPP" },
                { icon: "healing" as const, label: "ISTSS" },
                { icon: "public" as const, label: "WFMH" },
              ].map((org) => (
                <div
                  key={org.label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                    <span className="material-symbols-outlined text-[#6b5d4e]">
                      {org.icon}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6b5d4e]">
                    {org.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
