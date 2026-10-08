
    const params = new URLSearchParams(location.search);
    const openAccountUrl = 'https://fliplink.geojit.com/d/B2BLogin';
    document.querySelectorAll('.js-open-account').forEach(a => a.href = openAccountUrl);

    const featureData = {
      charting: {
        title:'Advanced Charting',
        description:'Master the markets with interactive, multi-timeframe charts and advanced technical indicators.',
        image:'assets/research-technical-mobile.webp',
        alt:'Advanced charting on Flip mobile',
        bg:'bg-sky',
        badge:'Mobile-first trading experience',
        bullets:[
          'Track market opportunities through clean, information-rich visual layouts.',
          'Use a mobile-first trading experience designed to keep decisions simple.'
        ]
      },
      options: {
        title:'Advanced Option Chain',
        description:'Plan smarter trades with real-time Greeks, IV analytics, payoff charts, and multi-leg strategy builders.',
        image:'assets/option-chain-mobile.webp',
        alt:'Advanced option chain on Flip mobile',
        bg:'bg-lilac',
        badge:'For active options traders',
        bullets:[
          'View option data through a structured and intuitive mobile interface.',
          'Support decision-making with analytics and multi-leg planning tools.'
        ]
      },
      research: {
        title:'Research',
        description:'Leverage in-house fundamental and technical research, enhanced by AI-driven insights and advanced analytics for every stock.',
        image:'assets/research-technical-mobile.webp',
        alt:'Research on Flip mobile',
        bg:'bg-mint',
        badge:'Ideas backed by research',
        bullets:[
          'Track actionable ideas and updates in a clear research interface.',
          'Use in-house insights to support better-informed decisions.'
        ]
      },
      watchlist: {
        title:'Customised Watchlist',
        description:'Stay in control with flexible watchlists — from clean, simple views to detailed layouts, synced across all devices.',
        image:'assets/watchlist-mobile.png',
        alt:'Customised watchlist on Flip mobile',
        bg:'bg-cream',
        badge:'Simple, flexible and synced',
        bullets:[
          'Monitor the stocks and baskets that matter to you.',
          'Move between quick overview and more detailed layouts with ease.'
        ]
      },
      portfolio: {
        title:'Portfolio Insight',
        description:'See the big picture with stock scores on quality, valuation, and technicals, plus comprehensive portfolio analysis.',
        image:'assets/portfolio-insight-mobile.webp',
        alt:'Portfolio insights on Flip mobile',
        bg:'bg-mint',
        badge:'Understand your portfolio better',
        bullets:[
          'View helpful quality and portfolio-level insights in one place.',
          'Track holdings with a clearer, more informed perspective.'
        ]
      }
    };

    const tabs = document.querySelectorAll('.feature-tab');
    const image = document.getElementById('featureImage');
    const title = document.getElementById('featureTitle');
    const desc = document.getElementById('featureDescription');
    const badge = document.getElementById('featureBadge');
    const bullets = document.getElementById('featureBullets');
    const wrap = document.getElementById('featureWrap');

    function renderBullets(items){
      bullets.innerHTML = items.map(item => `<li><b>✓</b><span>${item}</span></li>`).join('');
    }
    function setFeature(key){
      const data = featureData[key];
      if(!data) return;
      tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.feature === key)));
      image.src = data.image;
      image.alt = data.alt;
      title.textContent = data.title;
      desc.textContent = data.description;
      badge.textContent = data.badge;
      renderBullets(data.bullets);
      wrap.className = 'feature-media-wrap ' + data.bg;
    }
    tabs.forEach(tab => tab.addEventListener('click', () => setFeature(tab.dataset.feature)));

    const mobileCTA = document.querySelector('.mobile-cta');
    const hero = document.querySelector('.hero');
    function toggleMobileCTA(){
      if(window.innerWidth > 640 || !mobileCTA || !hero) return;
      const show = window.scrollY > hero.offsetHeight * 0.65;
      mobileCTA.classList.toggle('show', show);
    }
    window.addEventListener('scroll', toggleMobileCTA, {passive:true});
    window.addEventListener('resize', toggleMobileCTA);
    toggleMobileCTA();
  