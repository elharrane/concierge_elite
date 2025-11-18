export type Language = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      dashboard: 'Owner Dashboard',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Premium Property Management',
      title: 'Effortless Airbnb Hosting, Elevated.',
      subtitle: 'Concierge Elite manages your property with precision, hospitality, and premium care. Experience higher returns with zero stress.',
      getStarted: 'Get Started',
      explore: 'Explore Services',
    },
    features: {
      fiveStar: {
        title: 'Five-Star Standard',
        desc: 'We maintain strict quality controls to ensure every guest experience earns top ratings.',
      },
      revenue: {
        title: 'Maximized Revenue',
        desc: 'Our dynamic pricing algorithms ensure you never leave money on the table.',
      },
      protection: {
        title: 'Property Protection',
        desc: 'Comprehensive vetting and regular inspections keep your investment safe and secure.',
      },
    },
    highlight: {
      why: 'Why Choose Us',
      art: 'The Art of Hospitality',
      desc: "We don't just manage properties; we curate experiences. From the softness of the linens to the warmth of the welcome, every detail is meticulously handled by our dedicated team.",
      list1: '24/7 Concierge Support',
      list2: 'Interior Design Consultation',
      list3: 'Strict Guest Vetting',
      readStory: 'Read Our Story',
    },
    cta: {
      ready: 'Ready to Elevate Your Hosting?',
      join: 'Join an exclusive network of homeowners who trust Concierge Elite for superior returns and peace of mind.',
      request: 'Request a Consultation',
    },
    footer: {
      desc: 'Elevating property management to an art form. We provide seamless, luxury experiences for homeowners and guests alike.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'Concierge Elite. All rights reserved.',
      disclaimer: 'Concierge Elite is an independent third-party and is not affiliated with or endorsed by Airbnb.',
    },
    services: {
      label: 'Our Expertise',
      title: 'Comprehensive Management Solutions',
      desc: 'We handle everything from listing creation to guest departure, allowing you to enjoy the benefits of ownership without the operational burden.',
      guestComm: { title: 'Guest Communication', desc: '24/7 multi-lingual support ensuring your guests feel welcome.' },
      cleaning: { title: 'Cleaning & Laundry', desc: 'Hotel-grade housekeeping and linen services for impeccable hygiene.' },
      checkin: { title: 'Check-in / Check-out', desc: 'Seamless key exchange and personal greetings.' },
      listing: { title: 'Listing Optimization', desc: 'Professional photography and copywriting to maximize visibility.' },
      maintenance: { title: 'Maintenance', desc: 'Proactive inspections and rapid response repairs.' },
      revenue: { title: 'Revenue Management', desc: 'Dynamic pricing strategies based on market demand.' },
      tailored: { title: 'Tailored to Your Property', desc: 'Every home is unique. We create custom management plans.', quote: 'Get a Custom Quote' },
    },
    about: {
      who: 'Who We Are',
      title: 'Redefining Luxury Hospitality.',
      p1: "Concierge Elite was founded on a simple yet ambitious premise: that short-term rental management shouldn't just be about logistics—it should be about experience.",
      p2: 'We bridge the gap between the comfort of a home and the service of a five-star hotel.',
      mission: { title: 'Our Mission', desc: 'To empower property owners by unlocking the true potential of their real estate assets through data-driven strategies.' },
      standards: {
        title: 'Our Standards',
        li1: 'Uncompromising cleanliness and maintenance.',
        li2: 'Transparent, real-time financial reporting.',
        li3: 'Rapid response times, day or night.',
        li4: 'Personalized touches that surprise and delight.',
      },
      leadership: {
        title: 'Leadership',
        name: 'James Sterling',
        role: 'Founder & CEO',
        bio: 'With over 15 years in luxury hospitality management, James brings a wealth of experience from top-tier hotel chains to the private rental market.',
      }
    },
    dashboard: {
      title: 'Owner Dashboard',
      welcome: 'Welcome back, Mr. Sterling. Here is your property performance overview.',
      download: 'Download Report',
      revenuePerf: 'Revenue Performance',
      occupancy: 'Occupancy Rates',
      recent: 'Recent Activity',
      table: {
        prop: 'Property',
        guest: 'Guest',
        dates: 'Dates',
        status: 'Status',
        amount: 'Amount',
        confirmed: 'Confirmed',
        pending: 'Pending',
        completed: 'Completed',
      },
      stats: {
        revenue: 'Total Revenue (YTD)',
        occupancy: 'Occupancy Rate',
        nightly: 'Avg. Nightly Rate',
        rating: 'Guest Rating',
      }
    },
    contact: {
      label: 'Get In Touch',
      title: 'Partner With Concierge Elite',
      desc: 'Ready to maximize your property\'s potential? Contact us for a free revenue assessment.',
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        hq: 'Headquarters',
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        location: 'Property Location (City)',
        message: 'Message',
        send: 'Send Request',
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À Propos',
      dashboard: 'Tableau de Bord',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Gestion Immobilière Premium',
      title: 'L\'Hébergement Airbnb, Élevé.',
      subtitle: 'Concierge Elite gère votre propriété avec précision, hospitalité et soin premium. Profitez de rendements plus élevés sans stress.',
      getStarted: 'Commencer',
      explore: 'Explorer les Services',
    },
    features: {
      fiveStar: {
        title: 'Standard Cinq Étoiles',
        desc: 'Nous maintenons des contrôles de qualité stricts pour garantir que chaque expérience client mérite les meilleures notes.',
      },
      revenue: {
        title: 'Revenus Maximisés',
        desc: 'Nos algorithmes de tarification dynamique vous assurent de ne jamais perdre d\'argent.',
      },
      protection: {
        title: 'Protection de Propriété',
        desc: 'Vérification complète et inspections régulières gardent votre investissement en sécurité.',
      },
    },
    highlight: {
      why: 'Pourquoi Nous Choisir',
      art: 'L\'Art de l\'Hospitalité',
      desc: "Nous ne gérons pas seulement des propriétés ; nous créons des expériences. De la douceur des draps à la chaleur de l'accueil, chaque détail est géré méticuleusement.",
      list1: 'Support Conciergerie 24/7',
      list2: 'Consultation Design Intérieur',
      list3: 'Vérification Stricte des Invités',
      readStory: 'Lire Notre Histoire',
    },
    cta: {
      ready: 'Prêt à Élever Votre Hébergement ?',
      join: 'Rejoignez un réseau exclusif de propriétaires qui font confiance à Concierge Elite pour des rendements supérieurs.',
      request: 'Demander une Consultation',
    },
    footer: {
      desc: 'Élever la gestion immobilière au rang d\'art. Nous offrons des expériences de luxe sans couture pour les propriétaires et les invités.',
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
      rights: 'Concierge Elite. Tous droits réservés.',
      disclaimer: 'Concierge Elite est un tiers indépendant et n\'est pas affilié ou approuvé par Airbnb.',
    },
    services: {
      label: 'Notre Expertise',
      title: 'Solutions de Gestion Complètes',
      desc: 'Nous gérons tout, de la création de l\'annonce au départ des invités, vous permettant de profiter des avantages de la propriété sans le fardeau opérationnel.',
      guestComm: { title: 'Communication Invités', desc: 'Support multilingue 24/7 assurant que vos invités se sentent les bienvenus.' },
      cleaning: { title: 'Nettoyage & Linge', desc: 'Services de ménage et de linge de qualité hôtelière pour une hygiène impeccable.' },
      checkin: { title: 'Arrivée / Départ', desc: 'Échange de clés sans couture et accueils personnels.' },
      listing: { title: 'Optimisation d\'Annonce', desc: 'Photographie professionnelle et rédaction pour maximiser la visibilité.' },
      maintenance: { title: 'Maintenance', desc: 'Inspections proactives et réparations rapides.' },
      revenue: { title: 'Gestion des Revenus', desc: 'Stratégies de prix dynamiques basées sur la demande du marché.' },
      tailored: { title: 'Adapté à Votre Propriété', desc: 'Chaque maison est unique. Nous créons des plans de gestion personnalisés.', quote: 'Obtenir un Devis' },
    },
    about: {
      who: 'Qui Sommes-Nous',
      title: 'Redéfinir l\'Hospitalité de Luxe.',
      p1: "Concierge Elite a été fondé sur une prémisse simple mais ambitieuse : la gestion de location à court terme ne devrait pas seulement concerner la logistique, mais l'expérience.",
      p2: 'Nous comblons le fossé entre le confort d\'une maison et le service d\'un hôtel cinq étoiles.',
      mission: { title: 'Notre Mission', desc: 'Autonomiser les propriétaires en libérant le vrai potentiel de leurs actifs immobiliers grâce à des stratégies basées sur les données.' },
      standards: {
        title: 'Nos Standards',
        li1: 'Propreté et maintenance intransigeantes.',
        li2: 'Rapports financiers transparents en temps réel.',
        li3: 'Temps de réponse rapides, jour et nuit.',
        li4: 'Touches personnalisées qui surprennent et ravissent.',
      },
      leadership: {
        title: 'Direction',
        name: 'James Sterling',
        role: 'Fondateur & PDG',
        bio: 'Avec plus de 15 ans dans la gestion de l\'hospitalité de luxe, James apporte une riche expérience des chaînes hôtelières de premier plan au marché locatif privé.',
      }
    },
    dashboard: {
      title: 'Tableau de Bord Propriétaire',
      welcome: 'Bon retour, M. Sterling. Voici l\'aperçu des performances de votre propriété.',
      download: 'Télécharger Rapport',
      revenuePerf: 'Performance Revenus',
      occupancy: 'Taux d\'Occupation',
      recent: 'Activité Récente',
      table: {
        prop: 'Propriété',
        guest: 'Invité',
        dates: 'Dates',
        status: 'Statut',
        amount: 'Montant',
        confirmed: 'Confirmé',
        pending: 'En attente',
        completed: 'Terminé',
      },
      stats: {
        revenue: 'Revenu Total (YTD)',
        occupancy: 'Taux d\'Occupation',
        nightly: 'Taux Nuit Moyen',
        rating: 'Note Invités',
      }
    },
    contact: {
      label: 'Contactez-Nous',
      title: 'Devenez Partenaire',
      desc: 'Prêt à maximiser le potentiel de votre propriété ? Contactez-nous pour une évaluation gratuite.',
      info: {
        title: 'Informations de Contact',
        phone: 'Téléphone',
        email: 'Email',
        hq: 'Siège Social',
      },
      form: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        location: 'Lieu de la Propriété (Ville)',
        message: 'Message',
        send: 'Envoyer Demande',
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      about: 'من نحن',
      dashboard: 'لوحة المالك',
      contact: 'اتصل بنا',
    },
    hero: {
      tagline: 'إدارة الممتلكات الفاخرة',
      title: 'استضافة Airbnb سهلة وراقية.',
      subtitle: 'تدير كونسيرج إيليت ممتلكاتك بدقة وضيافة وعناية فائقة. جرب عوائد أعلى دون أي ضغوط.',
      getStarted: 'ابدأ الآن',
      explore: 'استكشف الخدمات',
    },
    features: {
      fiveStar: {
        title: 'معيار الخمس نجوم',
        desc: 'نحافظ على ضوابط جودة صارمة لضمان حصول كل تجربة ضيف على أعلى التقييمات.',
      },
      revenue: {
        title: 'أقصى قدر من العائدات',
        desc: 'تضمن خوارزميات التسعير الديناميكي لدينا أنك لن تفقد أي أرباح.',
      },
      protection: {
        title: 'حماية الممتلكات',
        desc: 'الفحص الشامل والتفتيش الدوري يحافظ على استثمارك آمنًا ومحميًا.',
      },
    },
    highlight: {
      why: 'لماذا تختارنا',
      art: 'فن الضيافة',
      desc: "نحن لا ندير الممتلكات فحسب؛ بل نصنع التجارب. من نعومة البياضات إلى دفء الترحيب، يتم التعامل مع كل التفاصيل بدقة من قبل فريقنا المتفاني.",
      list1: 'دعم الكونسيرج على مدار الساعة',
      list2: 'استشارات التصميم الداخلي',
      list3: 'فحص صارم للضيوف',
      readStory: 'اقرأ قصتنا',
    },
    cta: {
      ready: 'مستعد للارتقاء باستضافتك؟',
      join: 'انضم إلى شبكة حصرية من أصحاب المنازل الذين يثقون في كونسيرج إيليت للحصول على عوائد فائقة وراحة البال.',
      request: 'اطلب استشارة',
    },
    footer: {
      desc: 'الارتقاء بإدارة الممتلكات إلى شكل فني. نحن نقدم تجارب فاخرة وسلسة لأصحاب المنازل والضيوف على حد سواء.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      rights: 'كونسيرج إيليت. جميع الحقوق محفوظة.',
      disclaimer: 'كونسيرج إيليت طرف ثالث مستقل وليست تابعة أو معتمدة من Airbnb.',
    },
    services: {
      label: 'خبرتنا',
      title: 'حلول إدارة شاملة',
      desc: 'نحن نتعامل مع كل شيء بدءًا من إنشاء القائمة وحتى مغادرة الضيف، مما يتيح لك الاستمتاع بمزايا الملكية دون العبء التشغيلي.',
      guestComm: { title: 'تواصل الضيوف', desc: 'دعم متعدد اللغات على مدار الساعة لضمان شعور ضيوفك بالترحيب.' },
      cleaning: { title: 'التنظيف والغسيل', desc: 'خدمات التدبير المنزلي والبياضات بدرجة الفنادق لمعايير نظافة لا تشوبها شائبة.' },
      checkin: { title: 'تسجيل الوصول / المغادرة', desc: 'تبادل مفاتيح سلس وترحيب شخصي.' },
      listing: { title: 'تحسين القائمة', desc: 'تصوير احترافي وكتابة نصوص لزيادة الرؤية إلى أقصى حد.' },
      maintenance: { title: 'الصيانة', desc: 'فحوصات استباقية وإصلاحات سريعة الاستجابة.' },
      revenue: { title: 'إدارة الإيرادات', desc: 'استراتيجيات تسعير ديناميكية بناءً على طلب السوق.' },
      tailored: { title: 'مصممة لممتلكاتك', desc: 'كل منزل فريد من نوعه. نقوم بإنشاء خطط إدارة مخصصة.', quote: 'احصل على عرض مخصص' },
    },
    about: {
      who: 'من نحن',
      title: 'إعادة تعريف الضيافة الفاخرة.',
      p1: "تأسست كونسيرج إيليت على فرضية بسيطة وطموحة: أن إدارة التأجير قصير الأجل لا ينبغي أن تتعلق فقط باللوجستيات - بل يجب أن تتعلق بالتجربة.",
      p2: 'نحن نسد الفجوة بين راحة المنزل وخدمة فندق الخمس نجوم.',
      mission: { title: 'مهمتنا', desc: 'تمكين أصحاب الممتلكات من خلال إطلاق الإمكانات الحقيقية لأصولهم العقارية من خلال الاستراتيجيات القائمة على البيانات.' },
      standards: {
        title: 'معاييرنا',
        li1: 'نظافة وصيانة لا هوادة فيها.',
        li2: 'تقارير مالية شفافة في الوقت الفعلي.',
        li3: 'أوقات استجابة سريعة، ليلاً أو نهارًا.',
        li4: 'لمسات شخصية تفاجئ وتسعد.',
      },
      leadership: {
        title: 'القيادة',
        name: 'جيمس ستيرلينغ',
        role: 'المؤسس والرئيس التنفيذي',
        bio: 'مع أكثر من 15 عامًا في إدارة الضيافة الفاخرة، يجلب جيمس ثروة من الخبرة من سلاسل الفنادق من الدرجة الأولى إلى سوق التأجير الخاص.',
      }
    },
    dashboard: {
      title: 'لوحة المالك',
      welcome: 'مرحبًا بعودتك، سيد ستيرلينغ. إليك نظرة عامة على أداء ممتلكاتك.',
      download: 'تحميل التقرير',
      revenuePerf: 'أداء الإيرادات',
      occupancy: 'معدلات الإشغال',
      recent: 'النشاط الأخير',
      table: {
        prop: 'الممتلكات',
        guest: 'الضيف',
        dates: 'التواريخ',
        status: 'الحالة',
        amount: 'المبلغ',
        confirmed: 'مؤكد',
        pending: 'قيد الانتظار',
        completed: 'مكتمل',
      },
      stats: {
        revenue: 'إجمالي الإيرادات',
        occupancy: 'معدل الإشغال',
        nightly: 'متوسط سعر الليلة',
        rating: 'تقييم الضيف',
      }
    },
    contact: {
      label: 'تواصل معنا',
      title: 'كن شريكًا مع كونسيرج إيليت',
      desc: 'مستعد لزيادة إمكانات ممتلكاتك إلى أقصى حد؟ اتصل بنا للحصول على تقييم مجاني للإيرادات.',
      info: {
        title: 'معلومات الاتصال',
        phone: 'هاتف',
        email: 'بريد إلكتروني',
        hq: 'المقر الرئيسي',
      },
      form: {
        name: 'الاسم الكامل',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        location: 'موقع العقار (المدينة)',
        message: 'الرسالة',
        send: 'إرسال الطلب',
      }
    }
  }
};