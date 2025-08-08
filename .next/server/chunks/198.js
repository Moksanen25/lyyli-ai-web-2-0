exports.id=198,exports.ids=[198],exports.modules={5303:()=>{},8585:(e,i,t)=>{"use strict";var a=t(1085);t.o(a,"notFound")&&t.d(i,{notFound:function(){return a.notFound}})},1085:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{ReadonlyURLSearchParams:function(){return s},RedirectType:function(){return a.RedirectType},notFound:function(){return n.notFound},permanentRedirect:function(){return a.permanentRedirect},redirect:function(){return a.redirect}});let a=t(3953),n=t(6399);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class s extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},6399:(e,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{isNotFoundError:function(){return n},notFound:function(){return a}});let t="NEXT_NOT_FOUND";function a(){let e=Error(t);throw e.digest=t,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===t}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},8586:(e,i)=>{"use strict";var t;Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RedirectStatusCode",{enumerable:!0,get:function(){return t}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(t||(t={})),("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},3953:(e,i,t)=>{"use strict";var a;Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{RedirectType:function(){return a},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return d},getRedirectTypeFromError:function(){return h},getURLFromRedirectError:function(){return p},isRedirectError:function(){return m},permanentRedirect:function(){return c},redirect:function(){return u}});let n=t(4580),o=t(2934),s=t(8586),r="NEXT_REDIRECT";function l(e,i,t){void 0===t&&(t=s.RedirectStatusCode.TemporaryRedirect);let a=Error(r);a.digest=r+";"+i+";"+e+";"+t+";";let o=n.requestAsyncStorage.getStore();return o&&(a.mutableCookies=o.mutableCookies),a}function u(e,i){void 0===i&&(i="replace");let t=o.actionAsyncStorage.getStore();throw l(e,i,(null==t?void 0:t.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function c(e,i){void 0===i&&(i="replace");let t=o.actionAsyncStorage.getStore();throw l(e,i,(null==t?void 0:t.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function m(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[i,t,a,n]=e.digest.split(";",4),o=Number(n);return i===r&&("replace"===t||"push"===t)&&"string"==typeof a&&!isNaN(o)&&o in s.RedirectStatusCode}function p(e){return m(e)?e.digest.split(";",3)[2]:null}function h(e){if(!m(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function d(e){if(!m(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(a||(a={})),("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},8727:(e,i,t)=>{"use strict";t.d(i,{n:()=>a});let a=[{id:"11",title:"Lyyli.ai:n kehityst\xe4 vauhdittamaan p\xe4\xe4omasijoittajia – mullistaa yritysten viestinn\xe4n teko\xe4lyll\xe4",slug:"lyyli-ai-paomasijoittajat-kehitys",excerpt:"Viestint\xe4assistentti Lyyli.ai on saanut merkitt\xe4v\xe4n p\xe4\xe4omasijoituksen kasvun vauhdittamiseksi. Expion ja Redstonen hallinnoima South Savo Growth Fund tukevat yhti\xf6t\xe4.",content:`
      <p>Viestint\xe4assistentti <strong>Lyyli.ai</strong> on saanut merkitt\xe4v\xe4n p\xe4\xe4omasijoituksen kasvun vauhdittamiseksi. <strong>Expion</strong> ja <strong>Redstone</strong>n hallinnoima South Savo Growth Fund tukevat yhti\xf6t\xe4, joka automatisoi ja tehostaa yritysten sis\xe4ist\xe4 ja ulkoista viestint\xe4\xe4 \xe4lykk\xe4\xe4ll\xe4 teknologialla.</p>

      <p>Lyyli.ai muuttaa tapaa, jolla yritykset luovat ja hallitsevat sis\xe4lt\xf6\xe4. Teko\xe4lyavusteinen viestint\xe4assistentti automatisoi rutiiniteht\xe4vi\xe4, parantaa sis\xe4ll\xf6n laatua ja varmistaa johdonmukaisen viestinn\xe4n kaikissa kanavissa. AI-agentti oppii yrityksen br\xe4ndin, arvot ja viestint\xe4tyylin, ja tuottaa sitten johdonmukaista, laadukasta sis\xe4lt\xf6\xe4 kaikille kanaville – LinkedInista sis\xe4isiin tiedotteisiin. Yrityksen toimitusjohtaja ja toinen perustajista on <strong>Mikko Oksanen</strong>, toinen perustajista <strong>Veikko Laitinen</strong> toimii yrityksen teknologiajohtajana.</p>

      <p>"Mikko tuntee hyvin asiantuntijaorganisaatioiden viestinn\xe4lliset haasteet ja Veikon osaaminen ja ymm\xe4rrys teko\xe4lyteknologioiden laaja-alaisesta ymm\xe4rt\xe4misest\xe4 vakuuttivat meid\xe4t", sanoo <strong>Expion Oy</strong>:n toimitusjohtaja <strong>Sannamari Nyk\xe4nen</strong>, joka liittyy sijoituksen my\xf6t\xe4 my\xf6s yhti\xf6n hallitukseen. "Olemme tehneet Mikon kanssa yhteisty\xf6t\xe4 jo useamman vuoden ja onkin hienoa, ett\xe4 Expionin ensimm\xe4inen p\xe4\xe4omasijoitus kohdistuu juuri Lyyli.ai:n kehitysty\xf6h\xf6n."</p>

      <p>Rahoituksen avulla yritys viimeistelee tuotteensa markkinavalmiiksi ja k\xe4ynnist\xe4\xe4 aktiivisen myynnin Suomessa 50-1000 hengen asiantuntija- ja projektiorganisaatioille, joiden viestint\xe4haasteet ovat suurimmat.</p>

      <p>"Sijoittajien tuki on ratkaisevaa startupin alkuvaiheessa – se tuo paitsi p\xe4\xe4omaa, my\xf6s kokemusta ja verkostoja, joita ilman eteneminen olisi huomattavasti hitaampaa. Nyt p\xe4\xe4semme todella n\xe4ytt\xe4m\xe4\xe4n, miten teko\xe4ly voi vapauttaa viestint\xe4ammattilaiset luovaan ty\xf6h\xf6n", toteaa <strong>Lyyli AI Oy</strong>:n toimitusjohtaja Mikko Oksanen.</p>

      <p>"Teknisest\xe4 n\xe4k\xf6kulmasta Lyyli on t\xe4ydellinen projekti minulle, saan yhdistetty\xe4 kaikki ne osaamisalueet joita olen vuosien varrella ker\xe4nnyt ja samalla oppia jatkuvasti uutta", kertoo teknologiajohtaja Veikko Laitinen. "Teko\xe4lyn mahdollisuudet viestinn\xe4ss\xe4 ovat valtavat, ja meid\xe4n tekninen ratkaisu on rakennettu skaalautuvaksi alusta alkaen. Kun n\xe4kee kuinka Lyyli oppii yrityksen viestint\xe4tyylin ja alkaa tuottaa aidosti laadukasta sis\xe4lt\xf6\xe4, niin tajuaa ett\xe4 t\xe4m\xe4 on sit\xe4 teknologiaa joka todella muuttaa tapaa tehd\xe4 ty\xf6t\xe4 tiimeiss\xe4. On hienoa saada sijoittajien tuki ja luottamus projektille. Se antaa meille mahdollisuuden keskitty\xe4 t\xe4ysill\xe4 tuotekehitykseen ja vie meid\xe4t nopeammin markkinoille."</p>

      <h2>Hallitukseen laaja-alaista osaamista</h2>

      <p>Sijoituksen my\xf6t\xe4 yhti\xf6n hallitukseen liittyy Sannamari Nyk\xe4nen, kokenut talousjohtaja joka on vienyt l\xe4pi useita Due Diligence -prosesseja. Hallituksen muodostavat nyt Mikko Oksanen, Sannamari Nyk\xe4nen ja puheenjohtajana toimiva Veikko Laitinen.</p>

      <p>"Sannis tuo hallituksemme toimintaan talousjohtamisen osaamista ja ulkopuolisen n\xe4kemyst\xe4. On mukavaa, ett\xe4 joku v\xe4lill\xe4 v\xe4h\xe4n kyseenalaistaa meid\xe4n p\xe4\xe4t\xf6ksi\xe4mme", toteaa Oksanen.</p>

      <p>Lis\xe4ksi hallituksen neuvonantajiksi yhti\xf6\xf6n liittyv\xe4t <strong>Perttu Ahvenainen</strong> (<strong>Taitori Oy</strong>:n myynti- ja markkinointijohtaja) ja KHT-tilintarkastaja <strong>Teemu Laitinen</strong> (<strong>Kuittiniilo Oy</strong>:n perustaja).</p>

      <p>"Olemme kiitollisia sijoittajiemme tuesta ja odotamme innolla tulevaa yhteisty\xf6t\xe4 heid\xe4n kanssaan. Nyt on aika n\xe4ytt\xe4\xe4, miten suomalainen teko\xe4lyosaaminen p\xe4rj\xe4\xe4 globaalilla viestint\xe4markkinalla", p\xe4\xe4tt\xe4\xe4 Oksanen.</p>

      <h3><em>Sijoittajista</em></h3>

      <p><em><strong>Expion</strong><br>
      Expion on uusi suomalainen kasvupalveluita ja rahoitusmahdollisuuksia tarjoava family office -yhti\xf6. Yhti\xf6 keskittyy tukemaan pieni\xe4 ja keskisuuria yrityksi\xe4 kasvun ja kansainv\xe4listymisen tiell\xe4, tarjoaa yrityksille sek\xe4 rahoitusta ett\xe4 asiantuntijapalveluita, joita olemme itse kokeneet tarpeelliseksi kasvun ja yritystoiminnan arjessa.<br>
      www.expion.fi</em></p>

      <p><em><strong>Redstone</strong><br>
      Redstone on eurooppalainen p\xe4\xe4omasijoitusyhti\xf6. Hallinnoimme useita VC-rahastoja, joissa keskityt\xe4\xe4n aikaisen vaiheen eurooppalaisiin yrityksiin esimerkiksi finanssiteknologian, terveydenhuollon-, teollisen syv\xe4teknologian, kiinteist\xf6teknologian, energian ja ilmastoteknologian aloilla. Suurimmat toimistomme sijaitsevat Berliiniss\xe4, M\xfcnchenissa, Z\xfcrichiss\xe4 ja Helsingiss\xe4, ja rahastosalkkuihimme kuuluu yli 180 yrityst\xe4.<br>
      www.redstone.vc</em></p>
    `,author:{name:"Lyyli-tiimi",title:"Viestint\xe4",image:"https://img.shields.io/badge/LT-placeholder-blue"},publishDate:"2025-01-27",readTime:5,featuredImage:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["News","Investment","Growth"],isHighlighted:!0,language:"fi"},{id:"12",title:"Lyyli.ai Accelerates Development with Venture Capital Investment – Revolutionizing Business Communication with AI",slug:"lyyli-ai-venture-capital-investment-development",excerpt:"Communication assistant Lyyli.ai has received significant venture capital investment to accelerate growth. Expion and Redstone's managed South Savo Growth Fund supports the company.",content:`
      <p>Communication assistant <strong>Lyyli.ai</strong> has received significant venture capital investment to accelerate growth. <strong>Expion</strong> and <strong>Redstone</strong>'s managed South Savo Growth Fund supports the company that automates and enhances businesses' internal and external communication with intelligent technology.</p>

      <p>Lyyli.ai is changing how companies create and manage content. The AI-powered communication assistant automates routine tasks, improves content quality, and ensures consistent communication across all channels. The AI agent learns the company's brand, values, and communication style, then produces consistent, high-quality content for all channels – from LinkedIn to internal announcements. The company's CEO and co-founder is <strong>Mikko Oksanen</strong>, while the other co-founder <strong>Veikko Laitinen</strong> serves as the company's CTO.</p>

      <p>"Mikko understands well the communication challenges of expert organizations, and Veikko's expertise and comprehensive understanding of AI technologies convinced us," says <strong>Sannamari Nyk\xe4nen</strong>, CEO of <strong>Expion Oy</strong>, who also joins the company's board with the investment. "We've been working with Mikko for several years now, and it's wonderful that Expion's first venture capital investment is directed specifically at Lyyli.ai's development work."</p>

      <p>With the funding, the company will finalize its product for market readiness and launch active sales in Finland to 50-1000 person expert and project organizations, whose communication challenges are the greatest.</p>

      <p>"Investor support is crucial in a startup's early stage – it brings not only capital but also experience and networks, without which progress would be significantly slower. Now we can truly show how AI can free communication professionals for creative work," states <strong>Mikko Oksanen</strong>, CEO of <strong>Lyyli AI Oy</strong>.</p>

      <p>"From a technical perspective, Lyyli is a perfect project for me, I get to combine all the expertise areas I've gathered over the years while continuously learning new things," says CTO Veikko Laitinen. "The possibilities of AI in communication are vast, and our technical solution is built to be scalable from the ground up. When you see how Lyyli learns a company's communication style and starts producing genuinely high-quality content, you realize this is the technology that truly changes how work is done in teams. It's wonderful to receive investors' support and trust for the project. It gives us the opportunity to focus fully on product development and brings us to market faster."</p>

      <h2>Board Brings Diverse Expertise</h2>

      <p>With the investment, <strong>Sannamari Nyk\xe4nen</strong> joins the company's board, an experienced CFO who has led several Due Diligence processes. The board now consists of Mikko Oksanen, Sannamari Nyk\xe4nen, and Veikko Laitinen serving as chairman.</p>

      <p>"Sanni brings financial management expertise and external perspective to our board's operations. It's nice that someone occasionally questions our decisions a bit," states Oksanen.</p>

      <p>Additionally, <strong>Perttu Ahvenainen</strong> (Sales and Marketing Director at <strong>Taitori Oy</strong>) and CPA <strong>Teemu Laitinen</strong> (Founder of <strong>Kuittiniilo Oy</strong>) join as board advisors.</p>

      <p>"We are grateful for our investors' support and look forward to future collaboration with them. Now it's time to show how Finnish AI expertise performs in the global communication market," concludes Oksanen.</p>

      <h3><em>About the Investors</em></h3>

      <p><em><strong>Expion</strong><br>
      Expion is a new Finnish family office company offering growth services and financing opportunities. The company focuses on supporting small and medium-sized companies on their path to growth and internationalization, offering companies both financing and expert services that we ourselves have found necessary in the daily life of growth and business operations.<br>
      www.expion.fi</em></p>

      <p><em><strong>Redstone</strong><br>
      Redstone is a European venture capital company. We manage several VC funds focusing on early-stage European companies in areas such as fintech, healthcare, industrial deep tech, proptech, energy and climate technology. Our largest offices are located in Berlin, Munich, Zurich and Helsinki, and our fund portfolios include over 180 companies.<br>
      www.redstone.vc</em></p>
    `,author:{name:"Lyyli Team",title:"Communications",image:"https://img.shields.io/badge/LT-placeholder-blue"},publishDate:"2025-01-27",readTime:5,featuredImage:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["News","Investment","Growth"],isHighlighted:!0,language:"en"},{id:"10",title:"Who Lyyli Was Built For: The Invisible Burden of Communication",slug:"who-lyyli-was-built-for-invisible-burden",excerpt:"A blog about the silent responsibility of communication — and who carries it when no one is officially responsible.",content:`<p>In every organization, there's someone who carries communication — even when it's not in their job title.</p>

<p>Sometimes it's the CEO, who's expected to keep the team aligned and the board informed.<br>
Sometimes it's the operations manager, quietly making sure people aren't surprised by policy changes.<br>
Sometimes it's the communications lead, who's responsible for all the words that haven't been written yet.</p>

<p>And often, it's all of them — without enough time, support, or clarity.</p>

<h2>Communication is a function. But too often, it's treated like a hobby.</h2>

<p>I've lost count of the times I've heard someone say,</p>

<p><strong>"We know we should be communicating more — but we just don't have the capacity."</strong></p>

<p>What they're really saying is:</p>

<p><strong>"We know it matters, but we've run out of ways to make it happen."</strong></p>

<p>In small and midsize organizations, communication is everyone's job. And because it's everyone's job, it becomes no one's responsibility. Until something breaks. Until someone doesn't get the memo. Until the silence becomes a problem.</p>

<p>This is who we built Lyyli for.</p>

<h2>Lyyli helps carry the load — and keep the rhythm.</h2>

<p>Lyyli is not a content generator. It's not here to replace communicators. It's here to support people who already know what should be said — and just need help saying it.</p>

<p>Lyyli notices when something has changed. It suggests what might be worth sharing. It drafts a starting point. It sends reminders, writes in your tone, and makes publishing simple.</p>

<p><strong>Because the real burden in communication isn't knowing what to say.<br>
It's making sure it gets said.</strong></p>

<h2>Lyyli works for those who do everything else, too.</h2>

<p>If you're the person holding the company together, building the product, answering client calls, updating the website, running payroll, and trying to write an update to your team — Lyyli is for you.</p>

<p>If you're responsible for what your company sounds like but rarely have the space to think about tone — Lyyli is for you.</p>

<p>If you know that communication matters — but need it to take 10 minutes, not 3 hours — Lyyli is for you.</p>

<p><strong>Because communication should not depend on heroic effort.<br>
It should depend on good design.</strong></p>`,featuredImage:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",publishDate:"2025-01-26",readTime:4,tags:["blog","leadership"],author:{name:"Mikko Oksanen",title:"Co-founder & CEO",image:"/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png"},isHighlighted:!0,language:"en"},{id:"1",title:"How Tech SMEs Can Automate Their Communication with AI",slug:"tech-sme-automated-communication",excerpt:"Learn how software development companies can save significant time by automating their communication processes with AI tools.",content:`
      <h2>The Challenge: Communication Spread Thin</h2>
      
      <p>For most technology SMEs, internal and external communication is everyone's responsibility but no one's job description. With engineering teams focused on development and limited marketing resources, tech companies often struggle to maintain consistent messaging.</p>
      
      <p>Technical insights and product developments happen constantly in chat channels and meetings, but these valuable communications rarely reach customers or even all internal teams. Without dedicated communications staff, important updates remain siloed within development teams.</p>
      
      <h2>The AI Solution: Chat-Integrated Content Automation</h2>
      
      <p>An AI communication platform can be implemented to monitor key chat channels for potential content opportunities. When product updates, customer success stories, or technical innovations are discussed, the system identifies these as potential content topics and suggests content creation.</p>
      
      <p>The platform automatically drafts various content formats - from internal announcements to customer-facing blog posts - maintaining the company's voice and technical accuracy. Content gets routed to the right approver through integration with existing workflows.</p>
      
      <h2>Key Features That Make a Difference:</h2>
      
      <ul>
        <li><strong>Chat Platform Integration:</strong> AI monitors conversations for valuable content opportunities without disrupting existing workflows</li>
        <li><strong>Content Automation:</strong> Automatically generates drafts for various channels maintaining technical accuracy</li>
        <li><strong>Multi-channel Distribution:</strong> Publishes or schedules content across internal and external platforms</li>
        <li><strong>Voice Consistency:</strong> Maintains professional yet approachable tone regardless of content source</li>
      </ul>
      
      <h2>Typical Results: Measured Impact</h2>
      
      <p>Tech SMEs implementing AI communication tools typically report:</p>
      
      <ul>
        <li>15-20 hours saved monthly in manual content creation</li>
        <li>300% increase in internal communication consistency</li>
        <li>85% increase in content publication frequency</li>
        <li>60% improvement in internal information sharing</li>
        <li>20% improvement in customer engagement on product updates</li>
      </ul>
      
      <blockquote>
        <p>"AI communication platforms transform how tech companies communicate. Engineers can focus on building great products while their expertise and updates still reach customers. It's like having an additional team member who's always listening for important information."</p>
      </blockquote>
      
      <h2>Why This Approach Works</h2>
      
      <p>This approach succeeds because it integrates with existing communication channels rather than requiring new ones. By monitoring conversations that are already happening, AI leverages content opportunities that would otherwise be lost without adding any additional burden on the engineering teams.</p>
      
      <p>The system's ability to maintain technical accuracy while translating complex information into audience-appropriate content proves particularly valuable for software development companies balancing technical precision with clear customer communication.</p>
      
      <p>For technology SMEs facing similar challenges, AI-powered communication tools can bridge the gap between internal expertise and external visibility without hiring additional communications staff.</p>
    `,author:{name:"Lyyli Team",title:"Content Marketing",image:"https://img.shields.io/badge/LT-placeholder-blue"},publishDate:"2025-03-15",readTime:6,featuredImage:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["Case Study","Success Story","Tech SMEs"],isHighlighted:!0,language:"en"},{id:"2",title:"Kuinka konsulttiyritykset tehostavat asiantuntijaviestint\xe4\xe4ns\xe4 teko\xe4lyll\xe4",slug:"konsulttiyritys-tehosti-asiantuntijaviestintaa",excerpt:"Opi kuinka HR-konsultointiin erikoistuneet yritykset voivat automatisoida viestint\xe4ns\xe4 ja laskea sis\xe4ll\xf6ntuotannon kustannuksia merkitt\xe4v\xe4sti.",content:`
      <h2>Haaste: Arvokas tieto j\xe4\xe4 asiantuntijoiden s\xe4hk\xf6posteihin</h2>
      
      <p>Konsulttiyrityksill\xe4 on yleinen haaste: asiantuntijoiden osaaminen j\xe4\xe4 usein asiakasprojektien sis\xe4isiin muistioihin ja s\xe4hk\xf6posteihin. Arvokasta sis\xe4lt\xf6\xe4 ei saada tehokkaasti v\xe4litetty\xe4 nykyisille tai potentiaalisille asiakkaille.</p>
      
      <p>Asiantuntijat eiv\xe4t ehdi kirjoittaa uutiskirjeit\xe4 tai sosiaalisen median p\xe4ivityksi\xe4, vaikka sis\xe4lt\xf6\xe4 olisi tarjolla. Sis\xe4ll\xf6ntuotanto on tehotonta, vaatii ulkopuolisia sis\xe4ll\xf6ntuottajia, ja lopputulos ei aina vastaa yrityksen asiantuntijuutta.</p>
      
      <h2>Teko\xe4lyratkaisu: Teko\xe4ly tunnistaa asiantuntijasis\xe4ll\xf6n mahdollisuudet</h2>
      
      <p>Konsulttiyritykset voivat ottaa k\xe4ytt\xf6\xf6n automatisoidun teko\xe4lypohjaisen viestint\xe4alustan, joka integoituu yrityksen k\xe4ytt\xe4m\xe4\xe4n pilviymp\xe4rist\xf6\xf6n. Teko\xe4ly pystyy analysoimaan asiakasty\xf6n ja projektien dokumentteja ja tunnistamaan niist\xe4 viestint\xe4\xe4n sopivia aiheita.</p>
      
      <p>J\xe4rjestelm\xe4 ehdottaa, laatii ja julkaisee sis\xe4lt\xf6j\xe4 sosiaaliseen mediaan, uutiskirjeisiin ja intranetiin - asiantuntijoiden tarvitsee vain hyv\xe4ksy\xe4 tai hyl\xe4t\xe4 ehdotukset. Teko\xe4ly oppii tunnistamaan, mitk\xe4 aiheet kiinnostavat yrityksen kohdeyleis\xf6\xe4, ja kehitt\xe4\xe4 sis\xe4lt\xf6ehdotuksia sen mukaisesti.</p>
      
      <h2>Avainominaisuudet:</h2>
      
      <ul>
        <li><strong>Dokumenttien analysointi:</strong> Teko\xe4ly analysoi keskusteluja, dokumentteja ja s\xe4hk\xf6posteja tunnistaakseen sis\xe4lt\xf6mahdollisuudet</li>
        <li><strong>Asiantuntija-\xe4\xe4nens\xe4vyn s\xe4ilytt\xe4minen:</strong> AI oppii yrityksen ammattimaisen mutta selke\xe4n viestint\xe4tyylin</li>
        <li><strong>Monikanavajulkaisu:</strong> Automatisoi sis\xe4ll\xf6n julkaisun sosiaaliseen mediaan, uutiskirjeisiin ja intranetiin</li>
        <li><strong>Yksinkertainen hyv\xe4ksynt\xe4prosessi:</strong> Kevyt ty\xf6nkulku, jossa asiantuntijat voivat hyv\xe4ksy\xe4 tai muokata sis\xe4lt\xf6\xe4 nopeasti</li>
      </ul>
      
      <h2>Tyypilliset tulokset:</h2>
      
      <p>Konsulttiyritykset raportoivat teko\xe4lyviestinn\xe4n k\xe4ytt\xf6\xf6noton j\xe4lkeen yleens\xe4 seuraavia tuloksia:</p>
      
      <ul>
        <li>Sis\xe4ll\xf6ntuotantokustannukset laskevat 70-80%</li>
        <li>Sis\xe4ll\xf6n julkaisutiheys kasvaa 3-4x</li>
        <li>Sosiaalisen median seuraajam\xe4\xe4r\xe4t kasvavat 40-50%</li>
        <li>Uutiskirjeen avausprosentti nousee merkitt\xe4v\xe4sti</li>
        <li>Liidien m\xe4\xe4r\xe4 kasvaa 30-40%</li>
      </ul>
      
      <blockquote>
        <p>"Teko\xe4lypohjainen viestint\xe4 muuttaa t\xe4ysin tapamme viesti\xe4. Asiantuntijoiden osaaminen tulee nyt n\xe4kyv\xe4ksi, mik\xe4 vahvistaa br\xe4ndi\xe4 ja asiantuntijaprofiilia. Ja mik\xe4 parasta, t\xe4m\xe4 kaikki tapahtuu ilman, ett\xe4 kenenk\xe4\xe4n t\xe4ytyy istua tuntikausia kirjoitusp\xf6yd\xe4n \xe4\xe4ress\xe4."</p>
      </blockquote>
      
      <h2>Miksi t\xe4m\xe4 l\xe4hestymistapa toimii</h2>
      
      <p>Teko\xe4lypohjainen l\xe4hestymistapa toimii konsulttiyrityksille erityisen hyvin, koska se ei vaadi asiantuntijoilta uusien j\xe4rjestelmien opettelua. J\xe4rjestelm\xe4 integroituu olemassa oleviin ty\xf6nkulkuihin ja hy\xf6dynt\xe4\xe4 sis\xe4lt\xf6j\xe4, jotka olisivat muuten j\xe4\xe4neet k\xe4ytt\xe4m\xe4tt\xe4.</p>
      
      <p>Erityisen arvokasta konsulttiyritykselle on se, ett\xe4 teko\xe4ly pystyy s\xe4ilytt\xe4m\xe4\xe4n yrityksen asiantuntevan \xe4\xe4nens\xe4vyn, mutta tekem\xe4\xe4n sis\xe4ll\xf6st\xe4 saavutettavampaa. T\xe4m\xe4 tasapainottelu asiantuntijuuden ja selkeyden v\xe4lill\xe4 on tyypillinen haaste konsulttiyrityksille.</p>
      
      <p>T\xe4m\xe4 l\xe4hestymistapa osoittaa, miten teko\xe4lyavusteinen viestint\xe4alusta voi vapauttaa asiantuntijoiden aikaa heid\xe4n ydinosaamisensa pariin, samalla parantaen yrityksen n\xe4kyvyytt\xe4 ja asiakashankintaa.</p>
    `,author:{name:"Lyyli-tiimi",title:"Viestint\xe4",image:"https://img.shields.io/badge/LT-placeholder-purple"},publishDate:"2025-04-02",readTime:7,featuredImage:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["Case Study","Success Story","Consulting"],language:"fi"},{id:"3",title:"How Nonprofit Organizations Can Enhance Member Communication with AI",slug:"nonprofit-member-communication-enhancement",excerpt:"Learn how professional associations can improve their member communication and engagement while reducing workload through AI.",content:`
      <h2>The Challenge: Fragmented Communication with Limited Resources</h2>
      
      <p>Many nonprofit organizations face a common struggle: maintaining consistent communication with their members while operating with limited staff resources. With small teams handling multiple responsibilities, communication often becomes sporadic and inconsistent.</p>
      
      <p>Members frequently report receiving important updates or event information too late, leading to decreased engagement and participation. For organizations that need to communicate in multiple languages, the challenge is even greater, stretching already limited resources even thinner.</p>
      
      <h2>The AI Solution: Automated Multilingual Content Creation</h2>
      
      <p>Nonprofit organizations can implement AI-powered communication tools to build more streamlined workflows. These systems can monitor meeting notes, event calendars, and policy documents, automatically identifying communication opportunities and creating draft content.</p>
      
      <p>AI platforms can be trained to understand an organization's communication style and priorities, ensuring content maintains the professional but accessible tone appropriate for the organization. For multilingual organizations, AI's multilingual capabilities allow content to be instantly prepared in multiple languages.</p>
      
      <h2>Key Features That Make a Difference:</h2>
      
      <ul>
        <li><strong>Content Calendar Automation:</strong> AI creates and maintains a communication calendar based on organization activities</li>
        <li><strong>Multilingual Support:</strong> All content automatically prepared in multiple languages as needed</li>
        <li><strong>Document Mining:</strong> Automatic extraction of key information from meeting minutes and policy documents</li>
        <li><strong>Multi-channel Distribution:</strong> Seamless publishing across email newsletters, website updates, and social media</li>
      </ul>
      
      <h2>Typical Results: Measured Impact</h2>
      
      <p>Nonprofit organizations implementing AI communication tools typically report:</p>
      
      <ul>
        <li>10-15 hours of manual work saved per week</li>
        <li>100% increase in communication frequency</li>
        <li>40-50% increase in email open rates</li>
        <li>30-40% improvement in event attendance</li>
        <li>Significant increase in multilingual content delivery</li>
        <li>Measurable improvement in member satisfaction with communication</li>
      </ul>
      
      <blockquote>
        <p>"AI transforms how we connect with our members. We're now able to provide timely, relevant information in multiple languages without our small team becoming overwhelmed. Our members tell us they've never felt more connected to the organization than ever."</p>
      </blockquote>
      
      <h2>Why This Approach Works</h2>
      
      <p>For nonprofit organizations, this approach works because it addresses the fundamental challenge of limited resources. Rather than requiring the organization to hire additional staff or outsource content creation, AI amplifies the effectiveness of the existing team.</p>
      
      <p>The system's ability to maintain consistent messaging across languages is particularly valuable for multilingual organizations. By ensuring that all members receive communications in their preferred language, nonprofits improve accessibility and inclusivity.</p>
      
      <p>This approach demonstrates how AI-powered communication tools can help nonprofit organizations maintain professional, consistent outreach despite limited resources—ultimately improving member engagement and fulfilling their organizational mission more effectively.</p>
    `,author:{name:"Lyyli Team",title:"Nonprofit Solutions",image:"https://img.shields.io/badge/LT-placeholder-green"},publishDate:"2025-02-20",readTime:6,featuredImage:"https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["Case Study","Success Story","Nonprofits"],language:"en"},{id:"4",title:"How Research Institutions Can Amplify Their Impact with AI Communication",slug:"university-research-impact-amplification",excerpt:"Learn how academic institutions can increase their public engagement and visibility while maintaining scientific integrity.",content:`
      <h2>The Challenge: Academic Excellence Hidden Behind Technical Language</h2>
      
      <p>Research institutions and universities worldwide face a common dilemma: their groundbreaking research often remains confined to academic circles, with findings rarely reaching beyond scholarly publications. Despite the importance and quality of work being done, the broader impact is limited.</p>
      
      <p>Many research findings have direct implications for practitioners, policy makers, and the general public, but communication remains trapped in academic papers and technical reports that aren't accessible to these important stakeholders.</p>
      
      <p>Research institutions typically face several specific challenges:</p>
      <ul>
        <li>Research findings are communicated primarily through academic channels</li>
        <li>Technical language makes findings inaccessible to non-academic audiences</li>
        <li>Researchers lack time and sometimes skills to translate their work for broader audiences</li>
        <li>Communication efforts are inconsistent and dependent on individual initiative</li>
      </ul>
      
      <h2>The AI Solution: Academic-to-Public Translation</h2>
      
      <p>Research institutions can implement AI communication tools to bridge the gap between academic research and public communication. These platforms can analyze research papers, grant proposals, and project updates to identify communication opportunities.</p>
      
      <p>AI systems can be trained to understand specific domain knowledge and to translate complex concepts into accessible language while maintaining scientific accuracy. The technology creates content tailored to different stakeholder groups—from policy briefs for government officials to social media content for public engagement.</p>
      
      <h2>Key Features That Make a Difference:</h2>
      
      <ul>
        <li><strong>Research Publication Monitoring:</strong> Automatic identification of research milestones worth communicating</li>
        <li><strong>Multi-audience Translation:</strong> Creation of different content versions for academic, policy, media, and general public audiences</li>
        <li><strong>Scientific Accuracy Preservation:</strong> Maintains technical accuracy while simplifying language</li>
        <li><strong>Integrated Approval Workflow:</strong> Streamlined researcher review process to ensure accuracy</li>
      </ul>
      
      <h2>Typical Results: Measured Impact</h2>
      
      <p>Academic institutions implementing AI communication tools typically report:</p>
      
      <ul>
        <li>200%+ increase in media mentions of research</li>
        <li>150-200% growth in website traffic</li>
        <li>New policy collaborations resulting from improved visibility</li>
        <li>300%+ increase in research communication output without adding staff</li>
        <li>40+ hours per month saved for researchers who previously handled communications</li>
      </ul>
      
      <blockquote>
        <p>"AI helps us fulfill an essential part of our mission that we've struggled with—public engagement and research dissemination. Our research now reaches the people who can actually implement our findings, while maintaining the scientific integrity that's non-negotiable for us."</p>
      </blockquote>
      
      <h2>Why This Approach Works</h2>
      
      <p>This approach is particularly effective for academic and research institutions. AI's ability to maintain scientific accuracy while making content more accessible addresses a fundamental tension in research communication.</p>
      
      <p>By automating the "translation" of complex research into different formats for different audiences, AI removes a significant burden from researchers who want their work to have impact but lack the time or skills to communicate it effectively beyond academic circles.</p>
      
      <p>This approach shows how AI-powered communication tools can help academic institutions fulfill their public engagement mission more effectively, ultimately increasing the real-world impact of their research.</p>
    `,author:{name:"Lyyli Team",title:"Academic Solutions",image:"https://img.shields.io/badge/LT-placeholder-orange"},publishDate:"2024-12-10",readTime:7,featuredImage:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["Case Study","Education"],language:"en"},{id:"5",title:"How Creative Agencies Can Maintain Their Creative Voice at Scale with AI",slug:"design-studio-creative-voice-scaling",excerpt:"Discover how growing design and creative agencies can maintain brand consistency while increasing their content output.",content:`
      <h2>The Challenge: Creative Excellence vs. Visibility</h2>
      
      <p>Design studios and creative agencies face a classic dilemma as they grow: client work consumes all available time, leaving little bandwidth for their own marketing and communication. Despite being experts at crafting brand voices for clients, their own brands often suffer from neglect.</p>
      
      <p>Creative agencies typically face several specific challenges:</p>
      <ul>
        <li>Time-intensive client projects leave little room for marketing activities</li>
        <li>Case studies and portfolio updates are perpetually delayed</li>
        <li>Their distinctive creative voice is difficult to maintain consistently</li>
        <li>Knowledge of projects is siloed within specific teams</li>
      </ul>
      
      <h2>The AI Solution: Creative Brand Amplification</h2>
      
      <p>Creative agencies can implement AI tools focused on maintaining their distinctive creative voice while automating content creation. These platforms can be integrated with project management systems and design tools to monitor project progress and identify content opportunities.</p>
      
      <p>AI systems can be trained on an agency's unique brand voice—whether witty, design-forward, or unconventional. The technology creates draft content for case studies, social media posts, and newsletter updates that capture the studio's creative personality while highlighting their project successes.</p>
      
      <h2>Key Features That Make a Difference:</h2>
      
      <ul>
        <li><strong>Project Milestone Monitoring:</strong> Automatic identification of project completions and key deliverables worth showcasing</li>
        <li><strong>Design-centric Content:</strong> Creation of visually-oriented content that prioritizes the agency's design work</li>
        <li><strong>Brand Voice Preservation:</strong> Maintenance of the distinctive creative tone across all channels</li>
        <li><strong>Multi-format Output:</strong> Generation of content for portfolio, social media, and newsletter simultaneously</li>
      </ul>
      
      <h2>Typical Results: Measured Impact</h2>
      
      <p>Creative agencies implementing AI communication tools typically report:</p>
      
      <ul>
        <li>10-15 hours saved weekly on content creation and marketing activities</li>
        <li>Portfolio and case study updates completed within days of project completion (vs. weeks or months previously)</li>
        <li>300% increase in social media engagement</li>
        <li>40%+ growth in inbound leads attributed to improved online presence</li>
        <li>90%+ consistency rating in brand voice audits</li>
      </ul>
      
      <blockquote>
        <p>"AI solves what feels like an impossible problem for creative agencies. Our designers and writers finally have a tool that speaks their language and preserves our creative voice, while saving us countless hours of marketing work. Our project successes are now visible to potential clients without us having to choose between client work and self-promotion."</p>
      </blockquote>
      
      <h2>Why This Approach Works</h2>
      
      <p>This approach is particularly effective for creative agencies. The AI's ability to understand and maintain a distinctive creative voice addresses the core tension many agencies face—wanting to maintain a strong brand presence while focusing their creative energy on client work.</p>
      
      <p>By automating the documentation and promotion of completed projects, AI helps creative agencies showcase their work without the typical administrative burden. The system's ability to adapt to a creative, design-focused voice ensures that automation doesn't come at the cost of brand personality.</p>
      
      <p>This approach shows how AI-powered communication tools can help creative agencies solve the common challenge of self-promotion, ultimately strengthening their market position and new business development without diverting creative resources from billable client work.</p>
    `,author:{name:"Lyyli Team",title:"Creative Agency Solutions",image:"https://img.shields.io/badge/LT-placeholder-pink"},publishDate:"2025-01-18",readTime:6,featuredImage:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["Case Study","Success Story","Creative Agencies"],language:"en"},{id:"6",title:"How Sports Organizations Can Transform Their Fan Communication with AI",slug:"sports-club-fan-communication",excerpt:"Learn how sports clubs can improve sponsor relationships and fan engagement through automated communication.",content:`
      <h2>The Challenge: Reactive Communication Limiting Fan and Sponsor Engagement</h2>
      
      <p>Sports organizations, from professional teams to amateur clubs, often struggle with inconsistent communication despite having passionate fanbases. Their communication is largely reactive and dependent on the availability of small marketing teams or volunteers.</p>
      
      <p>Many organizations miss crucial opportunities to engage fans and provide value to sponsors. Game results might be posted hours after matches end, event promotions go out too late, and sponsor visibility is inconsistent at best.</p>
      
      <p>Sports organizations typically face several specific challenges:</p>
      <ul>
        <li>Irregular communication schedule dependent on staff availability</li>
        <li>Missed opportunities to highlight player achievements</li>
        <li>Inconsistent sponsor visibility across communication channels</li>
        <li>Lack of personalized communication for different fan segments</li>
        <li>Limited resources to manage communications for both home and away games</li>
      </ul>
      
      <h2>The AI Solution: Real-time Sports Communication</h2>
      
      <p>Sports organizations can implement AI communication platforms focused on automating time-sensitive communications and ensuring consistent sponsor visibility. These systems can integrate with game statistics systems, event calendars, and CRM to create a comprehensive view of communication opportunities.</p>
      
      <p>AI can be configured to create real-time game updates, player highlight features, and sponsor-integrated content that maintains the team's energetic voice. The system also segments content for different audience groups—from die-hard fans to casual supporters and corporate sponsors.</p>
      
      <h2>Key Features That Make a Difference:</h2>
      
      <ul>
        <li><strong>Game Event Monitoring:</strong> Automatic generation of pre-game, real-time, and post-game content</li>
        <li><strong>Sponsor Integration:</strong> Systematic inclusion of relevant sponsor mentions based on partnership agreements</li>
        <li><strong>Player Achievement Highlighting:</strong> Identification and promotion of notable player statistics and milestones</li>
        <li><strong>Multi-channel Distribution:</strong> Simultaneous publishing across email, app notifications, social media, and website</li>
      </ul>
      
      <h2>Typical Results: Measured Impact</h2>
      
      <p>Sports organizations implementing AI communication tools typically report:</p>
      
      <ul>
        <li>80%+ reduction in time between game events and related communications</li>
        <li>100%+ increase in social media engagement</li>
        <li>30-40% improvement in sponsor satisfaction scores</li>
        <li>25-30% growth in game attendance attributed to improved communication</li>
        <li>40%+ increase in merchandise sales following automated player highlight campaigns</li>
        <li>15+ hours saved weekly for marketing staff</li>
      </ul>
      
      <blockquote>
        <p>"AI transforms our relationship with fans and sponsors. We're now able to deliver the right message at the right time, whether it's a goal alert during a game or a player interview highlight. Our sponsors are thrilled with the consistent visibility, and our fans tell us they've never felt more connected to the team."</p>
      </blockquote>
      
      <h2>Why This Approach Works</h2>
      
      <p>This approach is particularly effective for sports organizations. AI's ability to operate in real-time and maintain a consistent communication schedule addresses the fundamental challenge of sports communication—the need to be both timely and consistent across numerous events.</p>
      
      <p>By automating routine updates while maintaining the team's voice and energy, AI helps sports organizations meet fan expectations for immediate information while ensuring sponsors receive their contractual visibility. The system's ability to segment communication for different audiences ensures that content remains relevant despite the increased frequency.</p>
      
      <p>This approach shows how AI-powered communication tools can help sports organizations transform their relationship with fans and sponsors, ultimately strengthening both community engagement and commercial partnerships without requiring additional staff resources.</p>
    `,author:{name:"Lyyli Team",title:"Sports Marketing",image:"https://img.shields.io/badge/LT-placeholder-red"},publishDate:"2025-04-28",readTime:6,featuredImage:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["Case Study","Success Story","Sports Organizations"],language:"en"},{id:"7",title:"Lyyli AI Oy Established – Lyyli.ai Redefines Communication Automation for Microbusinesses",slug:"lyyli-ai-established-lyyli-redefines-communication",excerpt:"A new era of AI-powered communication begins today. Lyyli AI Oy has been founded to develop and commercialize next-generation communication tools.",content:`
      <h2>Founders and First Investor</h2>
      
      <p>Lyyli AI Oy was founded by Mikko Oksanen (Jiiri Asiantuntijapalvelut Oy) and Veikko Laitinen (Aimaster Oy), two experienced professionals with backgrounds in AI, communication, and small business growth. The company's first investor is Expion Oy, supporting Lyyli AI's mission to bring intelligent communication tools within reach of every microenterprise in Europe.</p>
      
      <h2>Lyyli.ai – Let AI Handle Your Communications</h2>
      
      <p>Lyyli.ai is designed especially for European microbusinesses with diverse communication needs and limited resources. The platform enables professional, consistent communication without the need for an in-house team, freeing up valuable time for core business activities.</p>
      
      <p>Lyyli automates the entire communication process — from ideation and content creation to approval and publishing. At its core is an AI assistant that monitors internal and external communications, identifies content opportunities, and suggests tailored messages for different channels. The assistant learns from the organization's tone and objectives, producing ready-to-publish content and distributing it either with user approval or fully autonomously.</p>
      
      <h2>A Unique End-to-End Communication Solution</h2>
      
      <p>Lyyli.ai stands out by covering the entire communication workflow, not just fragments. Where other tools focus on content creation or social media scheduling, Lyyli automates the full pipeline. Key features include:</p>
      
      <ul>
        <li>Integrations with major communication and publishing platforms (e.g. Slack, LinkedIn, Teams)</li>
        <li>AI-generated content suggestions based on real company interactions</li>
        <li>An intuitive interface for training, managing, and reviewing content</li>
        <li>Automated scheduling, editing, and publishing workflows</li>
        <li>A self-learning AI engine that adapts to each company's voice and goals</li>
      </ul>
      
      <p>Lyyli turns communication into a productive, measurable business function.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>The first version of Lyyli.ai is now available to Finnish and European microbusinesses. The service will continue to evolve based on user feedback and expand internationally. The goal: to become the leading communication automation platform for microenterprises across Europe and beyond.</p>
      
      <h2>For more information:</h2>
      
      <p>
        Mikko Oksanen, CEO<br>
        📧 mikko@lyyli.ai<br>
        📞 +358 40 961 9224
      </p>
      
      <p>
        🌐 www.lyyli.ai<br>
        📩 hello@lyyli.ai
      </p>
    `,author:{name:"Lyyli Team",title:"Communications",image:"https://img.shields.io/badge/LT-placeholder-blue"},publishDate:"2025-05-15",readTime:4,featuredImage:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["News"],isHighlighted:!0,language:"en"},{id:"8",title:"Lyyli AI Oy on perustettu – Lyyli.ai mullistaa viestinn\xe4n automaation mikroyrityksille",slug:"lyyli-ai-perustettu-lyyli-viestintaautomaatio",excerpt:"Teko\xe4lyn uusi aikakausi viestinn\xe4ss\xe4 alkaa nyt. Uunituore Lyyli AI Oy on perustettu kehitt\xe4m\xe4\xe4n ja kaupallistamaan uuden sukupolven viestint\xe4ty\xf6kaluja.",content:`
      <h2>Perustajat ja ensimm\xe4inen sijoittaja</h2>
      
      <p>Lyyli AI Oy:n perustajat ovat Mikko Oksanen (Jiiri Asiantuntijapalvelut Oy) ja Veikko Laitinen (Aimaster Oy). Heid\xe4n taustansa yhdist\xe4v\xe4t vahvan osaamisen teko\xe4lyst\xe4, viestinn\xe4st\xe4 ja pk-yritysten liiketoiminnasta. Yhti\xf6n ensimm\xe4iseksi sijoittajaksi on l\xe4htenyt Expion Oy, joka uskoo Lyyli AI:n visioon \xe4lykk\xe4\xe4st\xe4, automatisoidusta viestinn\xe4st\xe4 eurooppalaisille mikroyrityksille.</p>
      
      <h2>Lyyli.ai – Teko\xe4ly joka hoitaa viestinn\xe4n puolestasi</h2>
      
      <p>Lyyli.ai on suunniteltu erityisesti eurooppalaisille mikroyrityksille, joilla on moninaisia viestint\xe4tarpeita mutta rajalliset resurssit. Palvelu vapauttaa aikaa ja mahdollistaa ammattimaisen viestinn\xe4n ilman omaa viestint\xe4tiimi\xe4.</p>
      
      <p>Lyyli yhdist\xe4\xe4 sis\xe4ll\xf6n ideoinnin, tuottamisen, hyv\xe4ksymisen ja julkaisemisen saumattomaksi prosessiksi – t\xe4ysin automatisoidusti. Teko\xe4lybotti seuraa organisaation sis\xe4ist\xe4 ja ulkoista viestint\xe4\xe4, tunnistaa tarpeet ja ehdottaa sopivia sis\xe4lt\xf6j\xe4 eri kanaviin. Botti oppii organisaation tyylist\xe4 ja tavoitteista, tuottaa valmiita julkaisuja ja julkaisee ne automaattisesti k\xe4ytt\xe4j\xe4n hyv\xe4ksynn\xe4ll\xe4 tai t\xe4ysin itsen\xe4isesti.</p>
      
      <h2>Ainutlaatuinen kokonaisratkaisu viestint\xe4\xe4n</h2>
      
      <p>Lyyli erottautuu markkinoilla kokonaisvaltaisella l\xe4hestymistavallaan. Siin\xe4 miss\xe4 monet ty\xf6kalut keskittyv\xe4t yksitt\xe4isiin osa-alueisiin, Lyyli automatisoi koko viestint\xe4prosessin. Alustan ydinominaisuudet:</p>
      
      <ul>
        <li>Integraatiot suosituimpiin viestint\xe4- ja julkaisualustoihin (esim. Slack, LinkedIn, Teams)</li>
        <li>Automaattinen sis\xe4lt\xf6ehdotusten generaattori organisaation viestinn\xe4n perusteella</li>
        <li>K\xe4ytt\xf6liittym\xe4 sis\xe4ll\xf6n hallintaan, kouluttamiseen ja valvontaan</li>
        <li>Julkaisujen ajastus, muokkaus ja monitorointi</li>
        <li>Itseoppiva teko\xe4ly, joka mukautuu yrityksen viestint\xe4tyyliin ja tavoitteisiin</li>
      </ul>
      
      <p>Lyyli ei vain tehosta viestint\xe4\xe4 – se muuttaa sen aidosti tuottavaksi osaksi liiketoimintaa.</p>
      
      <h2>Tulevaisuuden suunta</h2>
      
      <p>Lyyli.ai:n ensimm\xe4inen versio on nyt k\xe4ytett\xe4viss\xe4 suomalaisille ja eurooppalaisille mikroyrityksille. Seuraavassa vaiheessa palvelua kehitet\xe4\xe4n edelleen asiakaspalautteen perusteella ja laajennetaan kansainv\xe4lisesti. Tavoitteena on rakentaa johtava viestinn\xe4n automaatioalusta mikroyritysten tarpeisiin Euroopassa ja sen ulkopuolella.</p>
      
      <h2>Lis\xe4tiedot:</h2>
      
      <p>
        Mikko Oksanen, toimitusjohtaja<br>
        📧 mikko@lyyli.ai<br>
        📞 +358 40 961 9224
      </p>
      
      <p>
        🌐 www.lyyli.ai<br>
        📩 hello@lyyli.ai
      </p>
    `,author:{name:"Lyyli-tiimi",title:"Viestint\xe4",image:"https://img.shields.io/badge/LT-placeholder-blue"},publishDate:"2025-05-15",readTime:4,featuredImage:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",tags:["News"],language:"fi"},{id:"9",title:"Miksi Lyyli syntyi: tarina viesteist\xe4, jotka j\xe4iv\xe4t sanomatta",slug:"miksi-lyyli-syntyi-tarina",excerpt:"Henkil\xf6kohtainen kirjoitus siit\xe4, miksi Lyyli.ai syntyi ja kuinka viestint\xe4 ep\xe4onnistuu – ei tarkoituksella, vaan tekem\xe4tt\xe4 j\xe4tt\xe4misen\xe4.",content:`<p>Se ei alkanut visiosta.<br>Se alkoi hiljaisuudesta.</p>

<p>Olen viimeisen vuosikymmenen aikana ty\xf6skennellyt kasvuyritysten, j\xe4rjest\xf6jen ja asiantuntijaorganisaatioiden johdon kanssa. Olen n\xe4hnyt, miten hyv\xe4t ideat menett\xe4v\xe4t vauhtinsa, koska niit\xe4 ei ehditty sanoittaa. Miten oikeat p\xe4\xe4t\xf6kset j\xe4\xe4v\xe4t ilman jatkoa, koska kukaan ei ehtinyt viesti\xe4 niist\xe4 eteenp\xe4in.</p>

<p>Ja enemm\xe4n kuin kerran, olen itse ollut se, joka vaikeni.</p>

<p>Ei siksi, etten olisi v\xe4litt\xe4nyt. Vaan siksi, ett\xe4 viestint\xe4 kuormittaa. Se vaatii aikaa, kontekstia, keskittymist\xe4 — ja joskus rohkeutta. Ja kiireisess\xe4 arjessa se on liikaa vaadittu.</p>

<h2>Viestinn\xe4n unohtuminen ei ole poikkeus. Se on kaava.</h2>

<p>"Meid\xe4n pit\xe4isi viesti\xe4 t\xe4st\xe4 jotain."<br>
"Mun piti kirjoittaa se jo eilen."<br>
"Puhutaan t\xe4st\xe4 ensi viikolla."</p>

<p>N\xe4it\xe4 lauseita kuulee jokaisessa tiimiss\xe4, jokaisella alalla. Ne kuulostavat harmittomilta. Mutta ne kasaantuvat – ja seurauksena on ep\xe4selvyytt\xe4, v\xe4\xe4rink\xe4sityksi\xe4 ja v\xe4linpit\xe4m\xe4tt\xf6myytt\xe4.</p>

<p>Viestinn\xe4n puute ei maksa vain br\xe4ndille. Se maksaa kulttuurille. Ja se kertautuu.</p>

<p>Siksi p\xe4\xe4timme rakentaa ty\xf6kalun, joka rikkoo t\xe4m\xe4n kaavan.</p>

<h2>Lyyli ei korvaa viestint\xe4\xe4.<br>Se varmistaa, ett\xe4 viestint\xe4 tapahtuu.</h2>

<p>Lyyli syntyi yksinkertaisesta ajatuksesta: viestinn\xe4n pit\xe4isi olla tuottava osa jokaisen organisaation arkea — ei stressaava pakko.</p>

<p>Lyyli kuuntelee. Havaitsee. Ehdottaa. Kirjoittaa luonnoksia.<br>
Mutta t\xe4rkeint\xe4: se muistuttaa siit\xe4, mit\xe4 pit\xe4isi sanoa — ennen kuin hiljaisuus sanoo jotain muuta.</p>

<p>Lyyli tuo viestint\xe4\xe4n rytmin, ei reaktiota. Se tekee viestinn\xe4st\xe4 s\xe4\xe4nn\xf6llist\xe4, ei satunnaista sankaritekoa.</p>

<p>Se ei keksi viesti\xe4 puolestasi – se auttaa viem\xe4\xe4n sen perille.</p>

<h2>Kyse ei ole automaatiosta. Kyse on vastuunkannosta.</h2>

<p>Emme rakentaneet Lyyli\xe4 sis\xe4ll\xf6ntuottajille. Rakensimme sen ihmisille, jotka kantavat viestinn\xe4n vastuuta, mutta joilla ei ole aikaa tai ty\xf6kaluja tehd\xe4 sit\xe4 hyvin. Toimitusjohtajille. Viestint\xe4vastaaville. Toiminnanjohtajille. Heille, jotka tiet\xe4v\xe4t, ett\xe4 selkeys ratkaisee — ja ett\xe4 hiljaisuuskin viestii jotain.</p>

<p>Lyyli ei v\xe4it\xe4 olevansa ihminen. Mutta se auttaa ihmisi\xe4 tekem\xe4\xe4n sen, mink\xe4 he muutenkin haluaisivat: viesti\xe4 selke\xe4sti, johdonmukaisesti ja oikeaan aikaan.</p>

<p>Siksi me t\xe4m\xe4n teimme.</p>

<p>Ei siksi, ett\xe4 viestint\xe4 olisi rikki.<br>
Vaan siksi, ett\xe4 se on liian t\xe4rke\xe4\xe4 j\xe4\xe4d\xe4kseen tekem\xe4tt\xe4.</p>`,featuredImage:"https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",publishDate:"2025-01-25",readTime:4,tags:["blog","news"],author:{name:"Mikko Oksanen",title:"Perustaja & toimitusjohtaja",image:"/lovable-uploads/39c9c229-44c8-40ee-9e43-016269635def.png"},isHighlighted:!0,language:"fi"}]}};