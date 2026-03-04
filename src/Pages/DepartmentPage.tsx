import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

import { departments, type DeptCode } from "../data/department";

export default function DepartmentPage() {
  const { deptCode } = useParams();

  const code = (deptCode?.toUpperCase() || "") as DeptCode;
  const dept = departments[code];

  if (!dept) return <Navigate to="/" replace />;

  // ✅ change tab title + favicon per department
  useEffect(() => {
    document.title = `${dept.code} | BULSU COE`;

    const link =
      (document.querySelector("link[rel='icon']") as HTMLLinkElement | null) ??
      (document.querySelector("link[rel~='icon']") as HTMLLinkElement | null);

    if (link) {
      // put icons in: public/icons/ce.svg, public/icons/mee.svg, etc.
      link.href = `/icons/${dept.code.toLowerCase()}.svg`;
    }
  }, [dept.code]);

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white">
      <Navbar
        onNav={onNav}
      />

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            {dept.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{dept.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            <div className="h-[380px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={dept.images.heroLeft}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <div className="h-[220px] md:h-[240px] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={dept.images.heroBig}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="h-[160px] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={dept.images.heroSmall1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="h-[160px] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={dept.images.heroSmall2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-900">
            {dept.programOverview.heading}
          </div>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-3xl">
            {dept.programOverview.text}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <Stat
            value={dept.programOverview.stats.nonTeaching}
            label="Non-Teaching Personnel"
            accentHex={dept.theme.accentHex}
          />
          <Stat
            value={dept.programOverview.stats.faculty}
            label="Faculty"
            accentHex={dept.theme.accentHex}
          />
          <Stat
            value={dept.programOverview.stats.students}
            label="Enrolled Students"
            accentHex={dept.theme.accentHex}
          />
        </div>
      </section>

      {/* PEO */}
      <section id="peo" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.peo.title}
          subtitle={dept.peo.subtitle}
        />

        <div className="mt-10 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={dept.images.peo}
                alt=""
                className="w-full h-[320px] md:h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="space-y-5">
              {dept.peo.bullets.map((b, idx) => (
                <Bullet key={idx} title={`PEO ${idx + 1}`} text={b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SO */}
      <section id="so" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.so.title}
          subtitle={dept.so.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.so.outcomes.map((o, idx) => (
            <OutcomeCard key={idx} title={o.title} text={o.text} />
          ))}
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs font-semibold text-gray-400 tracking-wide">
              TAKE A TOUR
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              {dept.curriculum.title}
            </h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {dept.curriculum.text}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {dept.curriculum.bullets.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dept.theme.accentHex }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="h-[360px] md:h-[420px] rounded-2xl bg-gray-50 border flex items-center justify-center overflow-hidden">
              <img
                src={dept.images.watermark}
                alt=""
                className="w-[420px] md:w-[520px] opacity-20 select-none"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({
  value,
  label,
  accentHex,
}: {
  value: number;
  label: string;
  accentHex: string;
}) {
  return (
    <div>
      <div className="text-3xl font-extrabold" style={{ color: accentHex }}>
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold text-gray-500">{label}</div>
    </div>
  );
}

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{text}</div>
    </div>
  );
}

function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <div className="mx-auto w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
        ✅
      </div>
      <div className="mt-4 font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-500">{text}</div>
    </div>
  );
}