import stixIconsFont from "arraybuffer-loader!./fonts/stix-icons.woff";

(function () {
  const myFont = new FontFace("stix-icons", stixIconsFont);
  myFont.load().then((font) => {
    document.fonts.add(font);
  });
})();

let stixIcon = {
  black_o: {
    Vulnerability: {
      content: "\ue900",
    },
    Tool: {
      content: "\ue901",
    },
    Threat_Actor: {
      content: "\ue902",
    },
    Sighting: {
      content: "\ue903",
    },
    Report: {
      content: "\ue904",
    },
    Relationship: {
      content: "\ue905",
    },
    Opinion: {
      content: "\ue906",
    },
    Observed_Data: {
      content: "\ue907",
    },
    Note: {
      content: "\ue908",
    },
    Malware: {
      content: "\ue909",
    },
    Malware_Analysis: {
      content: "\ue90a",
    },
    Location: {
      content: "\ue90b",
    },
    Intrusion_Set: {
      content: "\ue90c",
    },
    Infrastructure: {
      content: "\ue90d",
    },
    Indicator: {
      content: "\ue90e",
    },
    Incident: {
      content: "\ue90f",
    },
    Identity: {
      content: "\ue910",
    },
    Grouping: {
      content: "\ue911",
    },
    Course_of_Action: {
      content: "\ue912",
    },
    Campaign: {
      content: "\ue913",
    },
    Attack_Pattern: {
      content: "\ue914",
    },
  },
  white_o: {
    Vulnerability: {
      content: "\ue915",
      color: "#fff",
    },
    Tool: {
      content: "\ue916",
      color: "#fff",
    },
    Threat_Actor: {
      content: "\ue917",
      color: "#fff",
    },
    Sighting: {
      content: "\ue918",
      color: "#fff",
    },
    Report: {
      content: "\ue919",
      color: "#fff",
    },
    Relationship: {
      content: "\ue91a",
      color: "#fff",
    },
    Opinion: {
      content: "\ue91b",
      color: "#fff",
    },
    Observed_Data: {
      content: "\ue91c",
      color: "#fff",
    },
    Note: {
      content: "\ue91d",
      color: "#fff",
    },
    Malware: {
      content: "\ue91e",
      color: "#fff",
    },
    Malware_Analysis: {
      content: "\ue91f",
      color: "#fff",
    },
    Location: {
      content: "\ue920",
      color: "#fff",
    },
    Intrusion_Set: {
      content: "\ue921",
      color: "#fff",
    },
    Infrastructure: {
      content: "\ue922",
      color: "#fff",
    },
    Indicator: {
      content: "\ue923",
      color: "#fff",
    },
    Incident: {
      content: "\ue924",
      color: "#fff",
    },
    Identity: {
      content: "\ue925",
      color: "#fff",
    },
    Grouping: {
      content: "\ue926",
      color: "#fff",
    },
    Course_of_Action: {
      content: "\ue927",
      color: "#fff",
    },
    Campaign: {
      content: "\ue928",
      color: "#fff",
    },
    Attack_Pattern: {
      content: "\ue929",
      color: "#fff",
    },
  },
  black: {
    Vulnerability: {
      content: "\ue92a",
    },
    Tool: {
      content: "\ue92b",
    },
    Threat_Actor: {
      content: "\ue92c",
    },
    Sighting: {
      content: "\ue92d",
    },
    Report: {
      content: "\ue92e",
    },
    Relationship: {
      content: "\ue92f",
    },
    Opinion: {
      content: "\ue930",
    },
    Observed_Data: {
      content: "\ue931",
    },
    Note: {
      content: "\ue932",
    },
    Malware_Analysis: {
      content: "\ue933",
    },
    Malware: {
      content: "\ue934",
    },
    Location: {
      content: "\ue935",
    },
    Intrusion_Set: {
      content: "\ue936",
    },
    Infrastructure: {
      content: "\ue937",
    },
    Indicator: {
      content: "\ue938",
    },
    Incident: {
      content: "\ue939",
    },
    Identity: {
      content: "\ue93a",
    },
    Grouping: {
      content: "\ue93b",
    },
    Course_of_Action: {
      content: "\ue93c",
    },
    Campaign: {
      content: "\ue93d",
    },
    Attack_Pattern: {
      content: "\ue93e",
    },
  },
  white: {
    Vulnerability: {
      content: "\ue93f",
      color: "#fff",
    },
    Tool: {
      content: "\ue940",
      color: "#fff",
    },
    Threat_Actor: {
      content: "\ue941",
      color: "#fff",
    },
    Sighting: {
      content: "\ue942",
      color: "#fff",
    },
    Report: {
      content: "\ue943",
      color: "#fff",
    },
    Relationship: {
      content: "\ue944",
      color: "#fff",
    },
    Opinion: {
      content: "\ue945",
      color: "#fff",
    },
    Observed_Data: {
      content: "\ue946",
      color: "#fff",
    },
    Note: {
      content: "\ue947",
      color: "#fff",
    },
    Malware_Analysis: {
      content: "\ue948",
      color: "#fff",
    },
    Malware: {
      content: "\ue949",
      color: "#fff",
    },
    Location: {
      content: "\ue94a",
      color: "#fff",
    },
    Intrusion_Set: {
      content: "\ue94b",
      color: "#fff",
    },
    Infrastructure: {
      content: "\ue94c",
      color: "#fff",
    },
    Indicator: {
      content: "\ue94d",
      color: "#fff",
    },
    Incident: {
      content: "\ue94e",
      color: "#fff",
    },
    Identity: {
      content: "\ue94f",
      color: "#fff",
    },
    Grouping: {
      content: "\ue950",
      color: "#fff",
    },
    Course_of_Action: {
      content: "\ue951",
      color: "#fff",
    },
    Campaign: {
      content: "\ue952",
      color: "#fff",
    },
    Attack_Pattern: {
      content: "\ue953",
      color: "#fff",
    },
  },
  Incident: {
    content: "\ue97f",
    color: "#fcb617",
  },
  Vulnerability: {
    content: "\ue980",
    color: "#ffd100",
  },
  Tool: {
    content: "\ue981",
    color: "#57509d",
  },
  Threat_Actor: {
    content: "\ue982",
    color: "#e61b5c",
  },
  Sighting: {
    content: "\ue983",
    color: "#eb5e2a",
  },
  Report: {
    content: "\ue984",
    color: "#769279",
  },
  Relationship: {
    content: "\ue985",
    color: "#cdd6d8",
  },
  Opinion: {
    content: "\ue986",
    color: "#505657",
  },
  Observed_Data: {
    content: "\ue987",
  },
  Note: {
    content: "\ue988",
    color: "#505657",
  },
  Malware_Analysis: {
    content: "\ue989",
    color: "#e776ac",
  },
  Malware: {
    content: "\ue98a",
    color: "#d3a3cb",
  },
  Location: {
    content: "\ue98b",
    color: "#505657",
  },
  Intrusion_Set: {
    content: "\ue98c",
    color: "#39b2c1",
  },
  Infrastructure: {
    content: "\ue98d",
    color: "#aed7c0",
  },
  Indicator: {
    content: "\ue98e",
    color: "#f3921a",
  },
  Identity: {
    content: "\ue98f",
    color: "#929697",
  },
  Grouping: {
    content: "\ue990",
    color: "#a3358b",
  },
  Course_of_Action: {
    content: "\ue991",
    color: "#a1c628",
  },
  Campaign: {
    content: "\ue992",
    color: "#50b682",
  },
  Attack_Pattern: {
    content: "\ue993",
    color: "#2277b5",
  },
};

export default stixIcon;
