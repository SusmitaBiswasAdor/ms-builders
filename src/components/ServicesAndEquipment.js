import React from "react";
import Layout from "./Layout";

const services = [
  "First Class Contractor (PWD & BIWTA)",
  "All Types of Construction Work (Civil, Electrical, Mechanical and Pillings)",
  "Man Power Supply",
  "Field Erection work",
  "Erection work",
  "Normal Barge Supply (Up to 1000 Ton Capacity)",
  "Setup Barge Supply (Up to 1000 Ton Capacity)",
  "Tug Boat Supply (Up to 1000 BHP)",
  "Dump Truck Supply",
  "All kinds of Construction equipment supply (Rental Basis)"
];

const equipment = [
  {
    category: "Piling Rig",
    items: [
      {
        name: "Hydraulic Rotary Rig",
        description: "Soilmec SR-40",
        quantity: 4,
        units: "Set"
      },
      {
        name: "Hydraulic Rotary Rig",
        description: "Soilmec SR-60",
        quantity: 1,
        units: "Set"
      },
      {
        name: "Reverse Circulation Drilling (RCD) Rig",
        description: "",
        quantity: 1,
        units: "Set"
      },
      {
        name: "GPS-20 Water Well Drilling Rig",
        description: "",
        quantity: 1,
        units: "Set"
      },
      {
        name: "Drilling Rig Percussion Method",
        description: "Local Made",
        quantity: 10,
        units: "Nos" 
      },
      {
        name: "Mechanical Rotary Drilling Rig",
        description: "Direct and Reverse Circulation",
        quantity: 9,
        units: "Nos"
      },
      {
        name: "Pre-cast Drop Hammer,(1-5 Ton)",
        description: "Loacal Made",
        quantity: 2,
        units: "Nos"
      },
      {
        name: "Desander",
        description: "SMD 100, Soilmech",
        quantity: 3,
        units: "Nos"
      },
      {
        name: "Air Compressor",
        description: "Airman PDS 185S, Japan",
        quantity: 2,
        units: "Nos"
      },
      {
        name: "Air Compressor",
        description: "Atlas Copco XA157, Netherlands",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "Air Compressor",
        description: "Electric",
        quantity: 2,
        units: "Nos"
      },
      {
        name: "Centrifugal Pump",
        description: "DELTA 120/2 ET, Soilmech",
        quantity: 2,
        units: "Nos"
      },
      {
        name: "Mixer BTM 1000",
        description: "Model-BTM 1000, Soilmec",
        quantity: 3,
        units: "Nos"
      },
      {
        name: "Double Drum Winch",
        description: "Local Made",
        quantity: 13,
        units: "Nos"
      },
      {
        name: "Single Drum Winch",
        description: "Local Made",
        quantity: 6,
        units: "Nos"
      },
      {
        name: "Hydraulic Pile Driver",
        description: "JZB 120",
        quantity: 3,
        units: "Nos"
      },
      
   
    ]
  },
  // Add more categories here

  {
    category: "Silent Pile Power Unit",
    items: [
      {
        name: "Silent Pile Power Unit",
        description: "KGK-80C4,Giken, Japan",
        quantity: 1,
        units: "set"
      }
    ]
  },
    
  {
    category: "Cranes",
    items: [
      {
        name: "Crawler Crane",
        description: "50 MT",
        quantity: 4,
        units: "Nos"
      },
      {
        name: "Crawler Crane",
        description: "55 MT (Sumitomo)",
        quantity: 3,
        units: "Nos"
      },
      {
        name: "Crawler Crane",
        description: "65 MT (IHI)",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "Rafter Crane",
        description: "25 MT (Tadano,Kato)",
        quantity: 2,
        units: "set"
      }
    ]
  },

  // Add more categories here pile test
  {
    category: "Pile Test",
    items: [
      {
        name: "Pile Dynamic Analyzer (PDA) DLT",
        description: "Profound, Netherlands & PDI, USA",
        quantity: 2,
        units: "sets"
      },
      {
        name: "Pile Integrity Tester (PIT)",
        description: "",
        quantity: 3,
        units: ""
      },
      {
        name: "Profound, Netherlands & PDI, USA Sets",
        description: "",
        quantity: null,
        units: ""
      },
      {
        name: "Cross Hole Sonic Logging (CSL)",
        description: "Profound, Netherlands & PDI, USA",
        quantity: 2,
        units: "sets"
      },
      {
        name: "Schmidt Hammer/Concrete Test Hammer",
        description: "China",
        quantity: 2,
        units: "Nos"
      },
      {
        name: "Pile Load Testing sets up to 1800T",
        description: "Local & China",
        quantity: null,
        units: ""
      },
      {
        name: "Sets 12 Soil Test Machine",
        description: "",
        quantity: null,
        units: ""
      },
    ]
  },
  // Add more categories here
  {
    category: "Drilling Rig",
    items:[
      
      {
        name: "Innovative Hydraulic Automatic Drilling Rig",
        description: "Drilling capacity: 150m, Australia",
        quantity: 1,
        units: "Sets"
      },
      {
        name: "Hydraulic Rotary Drilling Rig",
        description: "Drilling capacity: 150m, China",
        quantity: 6,
        units: "Sets"
      },
      {
        name: "Drilling Rig (Manual, Hand operated)",
        description: "Local Made",
        quantity: 12,
        units: "Sets"
      },
    ]
  },
  {
    category: "Survey Equipment",
    items: [
      {
        name: "Total Station",
        description: "Sokkia, Kolida",
        quantity: 3,
        units: "Set"
      },
      {
        name: "Level Machine",
        description: "",
        quantity: 5,
        units: "Set"
      },
    ]
  },
  {
    category: "Other Equipment",
    items: [
      
      {
        name: "Full Furnished Soil Laboratory",
        description: "",
        quantity: 1,
        units: "Unit"
      },
      {
        name: "Full Furnished Concrete Laboratory",
        description: "",
        quantity: 1,
        units: "Unit"
      },
      {
        name: "Concrete Pump (60-70m3/h)",
        description: "",
        quantity: 2,
        units: "Unit"
      },
      {
        name: "Concrete Pump (Horizontal 800m, Verticle 200m)",
        description: "Aqaris,1407 HR",
        quantity: 1,
        units: "Unit"
      },
      {
        name: "Drum Truck (16 CUM Box)",
        description: "Eicher, Tata, Hino",
        quantity: 16,
        units: "Nos"
      },
      {
        name: "Transit Mixer",
        description: "Hino",
        quantity: 3,
        units: "Nos"
      },
      {
        name: "Portable Concrete Mixer Machine",
        description: "Local & China (7-10 CFT)",
        quantity: 22,
        units: "Nos"
      },
      {
        name: "Tower Crane",
        description: "90 to 120 ft",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "Plate Compactor",
        description: "Manufacturer: China",
        quantity: 4,
        units: "Nos"
      },
      {
        name: "Unifloat (Pontoon)",
        description: "Manufacturer: Local & India",
        quantity: 23,
        units: "Nos"
      },
      {
        name: "Barge",
        description: "Local Made",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "Welding Machine",
        description: "Manufacturer: China",
        quantity: 70,
        units: "Sets"
      },
      {
        name: "Mud Pump With Engine",
        description: "",
        quantity: 35,
        units: "Sets"
      },
      {
        name: "Trailor",
        description: "Hino,TATA",
        quantity: 3,
        units: "Nos"
      },
      {
        name: "Truck",
        description: "TATA",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "Double Cabin Pickup",
        description: "Carryboy",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "Single Cabin Pickup",
        description: "TATA",
        quantity: 1,
        units: "Nos"
      },
      {
        name: "MS Pipe, I Beam, Steel Props, Scaffolding,Rilling Tools,D Shackles, \nHook Vibrator, Cutting Sets,Jacks(20 to 100T)&Chain Hoist (2 to 20T)",
        description: "",
        quantity: 210,
        units: "Ton"
      },
      {
        name: "Set Jacks (20 to 100T) & Chain Hoist (2 to 20T)",
        description: "",
        quantity: 3,
        units: "Lot"
      },
      {
        name: "Lathe Machine, Sharper Power Tools, Bench Drill, Drill Machines Hand tools for workshop",
        description: "",
        quantity: 2,
        units: "Sets"
      },
      {
        name: "Steel Shutter",
        description: "",
        quantity: 2000,
        units: "Sqm"
      },
      {
        name: "Sheet pile",
        description: "SP-II, SP-III, SP-IV",
        quantity: 1015,
        units: "Ton"
      }
    ]
  },
  // Add more categories here
  
];
const ServicesAndEquipment = () => {
  //constant hero
  const heroContent = (
    <>
      <div className="absolute bottom-20 left-5 right-5">
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4">
            Services & Equipment
          </h1>
          <p className="text-xl text-white font-medium drop-shadow">
            Professional construction services and state-of-the-art equipment
          </p>
        </div>
      </div>
    </>
  );

  return (
    <Layout heroContent={heroContent}>

      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 text-center mb-12">Our Services</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-bold">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 text-center mb-12">
            Our Equipment
          </h2>
          <div className="space-y-8">
            {equipment.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <h3 className="text-xl md:text-2xl font-semibold bg-gray-100 p-4 text-gray-800">
                  {category.category}
                </h3>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-yellow-600 text-white">
                          <th className="px-4 py-3 text-left text-sm md:text-base">Equipment/Machinery</th>
                          <th className="px-4 py-3 text-left text-sm md:text-base">Description</th>
                          <th className="px-4 py-3 text-center text-sm md:text-base">Quantity</th>
                          <th className="px-4 py-3 text-center text-sm md:text-base">Units</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr
                            key={itemIndex}
                            className={`${
                              itemIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100 transition-colors`}
                          >
                            <td className="px-4 py-3 border-b text-sm md:text-base">{item.name}</td>
                            <td className="px-4 py-3 border-b text-sm md:text-base">{item.description}</td>
                            <td className="px-4 py-3 border-b text-center text-sm md:text-base">{item.quantity || "-"}</td>
                            <td className="px-4 py-3 border-b text-center text-sm md:text-base">{item.units || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesAndEquipment;
