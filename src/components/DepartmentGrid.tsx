import React from 'react';
import { useNavigate } from 'react-router-dom';

import CE_Img from '../assets/Civil_Engineering.jpg';
import CPE_Img from '../assets/Computer_Engineering.jpg';
import ECE_Img from '../assets/Electronics_Engineering.jpg';
import EE_Img from '../assets/Electrical_Engineering.jpg';
import IE_Img from '../assets/Industrial_Engineering.jpg';
import ME_Img from '../assets/Mechanical_Engineering.jpg';
import MEE_Img from '../assets/Mechatronics_Engineering.jpg';
import MFE_Img from '../assets/Manufacturing_Engineering.jpg';

const departments = [
  { id: 'CE', name: 'Civil Engineering', description: 'Advancing infrastructure with precision and sustainable innovation.', image: CE_Img },
  { id: 'CPE', name: 'Computer Engineering', description: 'Bridging software and hardware to power the digital future.', image: CPE_Img },
  { id: 'ECE', name: 'Electronics Engineering', description: 'Innovating communication systems and electronic technologies.', image: ECE_Img },
  { id: 'EE', name: 'Electrical Engineering', description: 'Generating power solutions and efficient energy systems.', image: EE_Img },
  { id: 'IE', name: 'Industrial Engineering', description: 'Optimizing complex processes and integrated systems.', image: IE_Img },
  { id: 'ME', name: 'Mechanical Engineering', description: 'Designing the machinery and thermal systems of tomorrow.', image: ME_Img },
  { id: 'MEE', name: 'Mechatronics Engineering', description: 'Streamlining production through advanced automation.', image: MEE_Img },
  { id: 'MFE', name: 'Manufacturing Engineering', description: 'Specialized manufacturing processes and material science.', image: MFE_Img },
];

export default function DepartmentGrid() {
  const navigate = useNavigate();

  return (
    <section id="programs-grid" className="py-12 px-4 md:px-6 bg-[#fbf8f4]">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-[#a90000]/10 bg-white shadow-[0_30px_60px_-15px_rgba(169,0,0,0.12)]">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(169,0,0,0.06)_0%,rgba(255,255,255,1)_40%,rgba(250,204,21,0.03)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#a9000008_1px,transparent_1px),linear-gradient(to_bottom,#a9000008_1px,transparent_1px)] bg-[size:35px_35px] opacity-50" />
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#a90000] opacity-[0.06] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 py-12 px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white border border-[#a90000]/20 shadow-md backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a90000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a90000]"></span>
              </span>
              <span className="text-[#a90000] text-[10px] font-black uppercase tracking-[0.3em]">Engineering Programs</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter leading-none italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a90000] via-[#800000] to-[#ef8f33]">
                Programs
              </span>
              <span className="text-gray-950 ml-3 not-italic">Offered</span>
            </h2>
            
            <div className="h-2 w-24 bg-gradient-to-r from-[#a90000] via-[#ef8f33] to-[#facc15] mx-auto mb-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {departments.map((dept) => (
              <div 
                key={dept.id} 
                className="group cursor-pointer relative"
                onClick={() => navigate(`/dept/${dept.id}`)}
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-square bg-white border border-gray-100 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_25px_45px_rgba(169,0,0,0.15)] group-hover:-translate-y-2 group-hover:border-[#a90000]/20">
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#a90000] to-[#facc15] z-20" />
                  
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="relative z-10 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15" />
                  
                  <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                    <span className="text-white text-[9px] font-black uppercase tracking-widest bg-[#a90000] px-4 py-1.5 rounded-lg shadow-xl">
                      View details
                    </span>
                  </div>
                </div>

                <div className="pl-4 border-l-[4px] border-gray-100 group-hover:border-[#a90000] transition-all duration-500">
                  <h3 className="text-lg font-black text-gray-950 group-hover:text-[#a90000] transition-colors uppercase tracking-tight leading-none mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-snug font-medium line-clamp-2">
                    {dept.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-[#a90000] font-black text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    <span>Explore</span>
                    <div className="h-[1px] w-6 bg-[#a90000]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}