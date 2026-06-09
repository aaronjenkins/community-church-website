const config = {
  churchName: "First Baptist Church of Rising Sun",
  tagline: "Join us every Sunday at 10:00 AM",

  // Service info
  serviceTime: "10:00 AM",
  serviceDay: "Sunday",
  address: "123 Faith Avenue\nRising Sun, MD 21911",
  email: "info@fbcrisingsun.example",
  phone: "(555) 123-4567",

  // Social links
  youtube: "https://www.youtube.com/@firstbaptistchurchofrising6393",
  youtubeHandle: "firstbaptistchurchofrising6393",
  facebook: "https://www.facebook.com/p/First-Baptist-Church-of-Rising-Sun-100064678211090/",
  facebookPageId: "First-Baptist-Church-of-Rising-Sun-100064678211090",

  // PayPal donate link
  // PLACEHOLDER: Replace with your actual PayPal hosted button ID
  paypalLink: "https://www.paypal.com/donate/?hosted_button_id=PLACEHOLDER_BUTTON_ID",

  // ---- Bulletins ----
  // Bulletins are PDFs committed to src/bulletins/ (named MMDDYYYY.pdf).
  // The site auto-discovers them at build time and shows the newest — no config
  // here. See src/bulletins/README.md for how to add one.

  // ---- Vacation Bible School ----
  vbs: {
    title: "Vacation Bible School",
    dates: "June 23–27, 2026",
    time: "9:00 AM – 12:00 PM",
    ages: "Ages 4 through 5th grade",
    description:
      "A week of games, crafts, music, and Bible stories for kids in our community. " +
      "It's free, it's a blast, and all are welcome — bring a friend!",
    registerUrl: "mailto:info@fbcrisingsun.example?subject=VBS%20Registration",
    registerLabel: "Register / Ask a Question",
  },

  // Upcoming events
  events: [
    {
      month: "APR",
      day: "6",
      title: "Sunday Worship Service",
      details: "10:00 AM — Main Sanctuary",
    },
    {
      month: "APR",
      day: "9",
      title: "Midweek Bible Study",
      details: "7:00 PM — Fellowship Hall",
    },
    {
      month: "APR",
      day: "12",
      title: "Community Outreach Day",
      details: "9:00 AM — Church Parking Lot",
    },
    {
      month: "APR",
      day: "20",
      title: "Easter Sunday Celebration",
      details: "9:00 AM & 11:00 AM — Main Sanctuary",
    },
    {
      month: "APR",
      day: "26",
      title: "Youth Group Cookout",
      details: "5:00 PM — Back Field",
    },
  ],
};

export default config;
