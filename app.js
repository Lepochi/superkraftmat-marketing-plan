import React, { useState } from 'react';

const ChecklistItem = ({ task, onToggle, isCompleted, onGuideToggle, isGuideVisible }) => (
  <div className="mb-4 bg-gray-800 p-4 rounded-lg">
    <div className="flex items-center justify-between">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-orange-500 focus:ring-opacity-50"
        />
        <span className={`ml-3 ${isCompleted ? 'line-through text-gray-500' : 'text-gray-300'}`}>
          {task.title}
        </span>
      </label>
      <div className="flex items-center">
        <span className={`mr-4 px-2 py-1 rounded text-sm ${
          task.priority === 'Høy' ? 'bg-red-500' :
          task.priority === 'Medium' ? 'bg-yellow-500' :
          'bg-green-500'
        } text-gray-900`}>
          {task.priority}
        </span>
        <button
          onClick={onGuideToggle}
          className="px-2 py-1 bg-orange-500 text-gray-900 rounded hover:bg-orange-400 transition-colors duration-200"
        >
          {isGuideVisible ? 'Skjul guide' : 'Vis guide'}
        </button>
      </div>
    </div>
    {isGuideVisible && (
      <div className="mt-4 p-4 bg-gray-700 rounded-lg text-gray-300">
        <h4 className="font-semibold mb-2">Guide:</h4>
        <p>{task.guide}</p>
      </div>
    )}
  </div>
);

const MarketingPlan = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Optimaliser produktsider for nøkkelord relatert til 'superkraft' og 'superkraftmat'",
      priority: "Høy",
      completed: false,
      guideVisible: false,
      guide: "Basert på Google Search Console-data, fokuser på å optimalisere innholdet på produktsidene for nøkkelordene 'superkraft' og 'superkraftmat'. Disse har høy CTR og god posisjonering. Inkluder disse nøkkelordene i titler, meta-beskrivelser, overskrifter og produktbeskrivelser. Sørg for at innholdet er informativt og overbevisende."
    },
    {
      id: 2,
      title: "Utvikle en innholdsstrategi fokusert på helsefordeler og bruksområder for Superkraft",
      priority: "Høy",
      completed: false,
      guideVisible: false,
      guide: "Lag en serie blogginnlegg og produktbeskrivelser som fremhever helsefordelene og allsidigheten til Superkraft-produktene. Fokuser spesielt på hvordan produktene passer inn i livsstilen til målgruppene 'Den helsebevisste byproffen' og 'Trenings- og ernæringsentusiasten'. Inkluder praktiske tips og oppskrifter for å øke engasjement og tid på siden."
    },
    {
      id: 3,
      title: "Implementer e-post marketing automation for økt kundelojalitet",
      priority: "Høy",
      completed: false,
      guideVisible: false,
      guide: "Basert på den høye konverteringsraten fra e-postmarkedsføring til handlekurv, sett opp automatiserte e-postsekvenser. Inkluder en velkomstsekvens for nye kunder, oppfølgingssekvens etter kjøp med produkttips, og en reaktiveringssekvens for inaktive kunder. Bruk segmentering basert på kjøpshistorikk for mer målrettet kommunikasjon."
    },
    {
      id: 4,
      title: "Optimaliser landingssider for topselgende produkter",
      priority: "Høy",
      completed: false,
      guideVisible: false,
      guide: "Fokuser på å forbedre landingssidene for de best selgende produktene som 'Kylling - MED HAVSALT', 'Superkraft - FOKUS', og 'Angus - MED HAVSALT'. Øk ordtellingen med relevant, kvalitetsinnhold, forbedre produktbeskrivelser, legg til kundeomtaler, og optimaliser for konvertering med tydelige CTA-er."
    },
    {
      id: 5,
      title: "Utvikle og lansere en Instagram-kampanje for økt engasjement",
      priority: "Medium",
      completed: false,
      guideVisible: false,
      guide: "Ettersom Instagram genererer betydelig trafikk til produktsider, utvikle en engasjerende kampanje. Fokuser på visuelle aspekter av produktene, del kundehistorier, og bruk relevante hashtags. Samarbeid med mikroinfluencere innen helse og trening for å nå ut til 'Trenings- og ernæringsentusiasten' målgruppen."
    },
    {
      id: 6,
      title: "Implementer retargeting-annonser på Facebook",
      priority: "Medium",
      completed: false,
      guideVisible: false,
      guide: "Sett opp Facebook Pixel på nettstedet og skap annonser som målretter seg mot besøkende som har vist interesse for spesifikke produkter, spesielt toppselgere som 'Kylling - MED HAVSALT' og 'Superkraft - FOKUS', men ikke fullførte et kjøp. Tilby en liten rabatt eller gratis frakt som insentiv."
    },
    {
      id: 7,
      title: "Forbedre intern lenkestruktur på nettstedet",
      priority: "Medium",
      completed: false,
      guideVisible: false,
      guide: "Basert på SEO-analysen, forbedre den interne lenkesstrukturen på nettstedet. Fokuser på å lenke relaterte produkter og relevante blogginnlegg fra produktsidene. Dette vil forbedre navigasjonen, øke tiden brukere tilbringer på siden, og potensielt forbedre SEO-rangeringen."
    },
    {
      id: 8,
      title: "Utvikle en dedikert kampanje for 'Den bevisste modne forbrukeren'",
      priority: "Medium",
      completed: false,
      guideVisible: false,
      guide: "Skap en målrettet kampanje for aldersgruppen 55-75 år, som utgjør en betydelig del av målgruppen. Fokuser på helsefordelene ved Superkraftmat-produkter for denne aldersgruppen, og hvordan de kan integreres i en sunn livsstil. Vurder å bruke tradisjonelle medier i tillegg til digitale kanaler for å nå denne gruppen."
    },
    {
      id: 9,
      title: "Optimaliser nettstedet for mobil",
      priority: "Høy",
      completed: false,
      guideVisible: false,
      guide: "Med tanke på den økende mobile trafikken, sørg for at nettstedet er fullt optimalisert for mobile enheter. Forbedre lastetiden, sørg for at alle elementer er lett klikk-bare på mindre skjermer, og at checkout-prosessen er smidig på mobile enheter. Dette vil potensielt øke konverteringsraten for mobilbrukere."
    },
    {
      id: 10,
      title: "Implementer og promoter et kundelojalitetsprogram",
      priority: "Medium",
      completed: false,
      guideVisible: false,
      guide: "For å øke kundegjenkjøpsraten, utvikle et lojalitetsprogram som belønner gjentatte kjøp. Dette kan inkludere poeng for kjøp, eksklusive tilbud for medlemmer, og tidlig tilgang til nye produkter. Promoter programmet gjennom e-post, sosiale medier, og på nettstedet."
    },
    {
      id: 11,
      title: "Utvikle en serie med utdannende videoer om produktene",
      priority: "Lav",
      completed: false,
      guideVisible: false,
      guide: "Produser korte, informative videoer som demonstrerer bruken av Superkraftmat-produkter og forklarer deres unike fordeler. Del disse på nettstedet, YouTube, og sosiale medier. Dette vil hjelpe med å utdanne potensielle kunder og kan føre til økt konvertering."
    },
    {
      id: 12,
      title: "Optimaliser for lokale søk",
      priority: "Lav",
      completed: false,
      guideVisible: false,
      guide: "Ettersom mange av målgruppene er basert i større norske byer, forbedre lokal SEO. Dette inkluderer å oppdatere Google My Business-oppføringen, sikre konsistent NAP (Name, Address, Phone) informasjon på tvers av nettet, og oppmuntre til lokale kundeanmeldelser."
    }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleGuide = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, guideVisible: !task.guideVisible } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-md text-gray-300 border-2 border-orange-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-300">Optimalisert 3-måneders Markedsføringsplan for Superkraftmat AS</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-orange-300">Fremdrift</h2>
        <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-orange-500 h-full transition-all duration-500 ease-out"
            style={{width: `${progress}%`}}
          ></div>
        </div>
        <p className="mt-2 text-center">{completedTasks} av {totalTasks} oppgaver fullført ({Math.round(progress)}%)</p>
      </div>

      <div className="space-y-4">
        {tasks.map(task => (
          <ChecklistItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            isCompleted={task.completed}
            onGuideToggle={() => toggleGuide(task.id)}
            isGuideVisible={task.guideVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketingPlan;
