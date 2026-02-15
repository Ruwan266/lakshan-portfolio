export type Language = "en" | "ar" | "ja" | "zh";

export const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      name: "Lakshan Kumarathunga",
      title: "IT Infrastructure Engineer | Azure & Cloud Security",
      summary: "A future-focused IT professional with hands-on experience in IT support, web development, and AI-based solutions, aligned with the fast-evolving technology landscape of the UAE. Known for rapid learning, problem-solving, and working efficiently with emerging technologies.",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      p1: "I am a highly adaptable IT professional, continuously upgrading my skills to meet modern business and digital transformation demands. My experience spans IT infrastructure management, web development, and AI-based solutions across enterprises in Sri Lanka and the UAE.",
      p2: "I bring value beyond routine tasks by integrating innovation, automation, and smart systems into daily operations. I aim to contribute to organizations that prioritize growth, efficiency, and technological advancement.",
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Bachelor of Science in Information Systems Management",
          school: "Manipal Academy of Higher Education – Dubai, UAE",
          year: "Currently Pursuing (Expected 2027)",
          desc: "Focus Areas: IT Infrastructure, Database Management, Cloud Computing, Web Technologies, AI Applications.",
        },
        {
          degree: "Microsoft Security Engineer Diploma (SC-200, SC-300, SC-401)",
          school: "NextGen Campus – Sri Lanka",
          year: "JAN 2025 – JAN 2026",
          desc: "SC-200 Security Operations Analyst, SC-300 Identity & Access Administrator, SC-401 Information Protection & Compliance.",
        },
        {
          degree: "Diploma in Web Design and Development",
          school: "Warlton International Campus – Sri Lanka (QBUK, UK)",
          year: "JUL 2023 – JUL 2024",
          desc: "HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, MySQL, and Final Web Application Project.",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          role: "Information Technology Executive",
          company: "John Keells Consumer Foods Sector – Sri Lanka",
          period: "APR 2024 – SEP 2025",
          desc: "Managed IT infrastructure, provided technical support, supported cloud migration and modernization projects, and ensured data security compliance with proactive monitoring solutions.",
        },
        {
          role: "IT Support Specialist & Hardware Engineering",
          company: "Softlogic Information Technology – Sri Lanka",
          period: "FEB 2023 – FEB 2024",
          desc: "Provided technical support for PCs, laptops, servers, and network systems. Managed LAN/WAN networking, Windows and Linux OS, and delivered end-user support in fast-paced environments.",
        },
        {
          role: "Web Developer (Remote)",
          company: "Appsdept Industrial – Sri Lanka",
          period: "SEP 2024 – JAN 2025",
          desc: "Developed front-end and back-end web applications using React, PHP, Python, and Laravel. Worked with Docker and Linux environments for deployment.",
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Cloud Infrastructure Migration",
          desc: "Led cloud migration and modernization projects to enhance scalability and performance for enterprise clients at John Keells.",
          tech: "Azure, Windows Server, Active Directory",
        },
        {
          name: "Responsive Web Applications",
          desc: "Built responsive user interfaces and server-side functionalities with improved UI/UX design for better user engagement.",
          tech: "React, PHP, Laravel, Docker",
        },
        {
          name: "IT Infrastructure Monitoring",
          desc: "Implemented proactive monitoring solutions and backup & disaster recovery systems to ensure system stability and performance.",
          tech: "Microsoft 365, PowerShell, Linux",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        { name: "Infrastructure & Server", items: ["Windows Server Administration", "Active Directory & Group Policy", "System Installation & Configuration", "Backup & Disaster Recovery"] },
        { name: "Cloud & Security", items: ["Microsoft Entra ID (Azure AD)", "Microsoft 365 Admin Center", "Azure Security (SC-200/300/401)", "IT Support (L1/L2)"] },
        { name: "Development", items: ["React", "JavaScript", "PHP & Laravel", "Python", "HTML/CSS/Bootstrap"] },
        { name: "Tools & Platforms", items: ["Docker", "Git & GitHub", "Linux Administration", "VS Code", "Remote Desktop & Helpdesk Tools"] },
      ],
    },
    contact: {
      title: "Get In Touch",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Your Message",
      send: "Send Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Write your message here...",
      info: {
        email: "lakshankumarathunga42@gmail.com",
        phone: "+971-5436-45103",
        location: "Academic City, Dubai, UAE",
        linkedin: "www.linkedin.com/in/lakshan-kumarathunga-1039a8264",
      },
    },
    certifications: {
      title: "Certifications",
      items: [
        "IT Essentials – Cisco (2025)",
        "Microsoft Azure Administrator (AZ-104 Training) (2024–2025)",
        "Introduction to Cybersecurity – Cisco (2024)",
        "Web Design – University of Moratuwa (2024)",
        "Diploma in Web Design & Development (2023–2024)",
        "Engineering Technology Certificate (2021–2023)",
      ],
    },
    footer: "© 2026 Lakshan Kumarathunga | Multilingual Portfolio",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      education: "التعليم",
      experience: "الخبرة",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "تواصل معي",
    },
    hero: {
      name: "لكشان كوماراتونجا",
      title: "مهندس بنية تحتية لتكنولوجيا المعلومات | أمان Azure والسحابة",
      summary: "متخصص في تكنولوجيا المعلومات يركز على المستقبل مع خبرة عملية في الدعم الفني وتطوير الويب والحلول القائمة على الذكاء الاصطناعي، متوافق مع المشهد التكنولوجي سريع التطور في الإمارات.",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
    },
    about: {
      title: "نبذة عني",
      p1: "أنا متخصص في تكنولوجيا المعلومات قابل للتكيف بدرجة عالية، أعمل باستمرار على تطوير مهاراتي لتلبية متطلبات الأعمال الحديثة والتحول الرقمي. تمتد خبرتي عبر إدارة البنية التحتية لتكنولوجيا المعلومات وتطوير الويب والحلول القائمة على الذكاء الاصطناعي.",
      p2: "أقدم قيمة تتجاوز المهام الروتينية من خلال دمج الابتكار والأتمتة والأنظمة الذكية في العمليات اليومية. أهدف إلى المساهمة في المؤسسات التي تعطي الأولوية للنمو والكفاءة والتقدم التكنولوجي.",
    },
    education: {
      title: "التعليم",
      items: [
        {
          degree: "بكالوريوس العلوم في إدارة نظم المعلومات",
          school: "أكاديمية مانيبال للتعليم العالي – دبي، الإمارات",
          year: "قيد الدراسة (التخرج المتوقع ٢٠٢٧)",
          desc: "مجالات التركيز: البنية التحتية لتكنولوجيا المعلومات، إدارة قواعد البيانات، الحوسبة السحابية، تقنيات الويب، تطبيقات الذكاء الاصطناعي.",
        },
        {
          degree: "دبلوم مهندس أمان مايكروسوفت (SC-200, SC-300, SC-401)",
          school: "نكست جين كامبس – سريلانكا",
          year: "يناير ٢٠٢٥ – يناير ٢٠٢٦",
          desc: "محلل عمليات أمان، مسؤول الهوية والوصول، مسؤول حماية المعلومات والامتثال.",
        },
        {
          degree: "دبلوم في تصميم وتطوير الويب",
          school: "وارلتون إنترناشونال كامبس – سريلانكا (QBUK، المملكة المتحدة)",
          year: "يوليو ٢٠٢٣ – يوليو ٢٠٢٤",
          desc: "HTML، CSS، Bootstrap، JavaScript، jQuery، PHP، MySQL، ومشروع تطبيق ويب نهائي.",
        },
      ],
    },
    experience: {
      title: "الخبرة المهنية",
      items: [
        {
          role: "تنفيذي تكنولوجيا المعلومات",
          company: "قطاع الأغذية الاستهلاكية جون كيلز – سريلانكا",
          period: "أبريل ٢٠٢٤ – سبتمبر ٢٠٢٥",
          desc: "إدارة البنية التحتية لتكنولوجيا المعلومات، تقديم الدعم الفني، دعم مشاريع الترحيل السحابي والتحديث، وضمان الامتثال لأمن البيانات.",
        },
        {
          role: "أخصائي دعم تكنولوجيا المعلومات وهندسة الأجهزة",
          company: "سوفت لوجيك لتكنولوجيا المعلومات – سريلانكا",
          period: "فبراير ٢٠٢٣ – فبراير ٢٠٢٤",
          desc: "تقديم الدعم الفني للحواسيب والخوادم وأنظمة الشبكات. إدارة شبكات LAN/WAN وأنظمة Windows وLinux.",
        },
        {
          role: "مطور ويب (عن بُعد)",
          company: "أبسديبت إندستريال – سريلانكا",
          period: "سبتمبر ٢٠٢٤ – يناير ٢٠٢٥",
          desc: "تطوير تطبيقات ويب أمامية وخلفية باستخدام React وPHP وPython وLaravel. العمل مع Docker وLinux للنشر.",
        },
      ],
    },
    projects: {
      title: "المشاريع",
      items: [
        {
          name: "ترحيل البنية التحتية السحابية",
          desc: "قيادة مشاريع الترحيل السحابي والتحديث لتعزيز قابلية التوسع والأداء لعملاء المؤسسات.",
          tech: "Azure، Windows Server، Active Directory",
        },
        {
          name: "تطبيقات ويب متجاوبة",
          desc: "بناء واجهات مستخدم متجاوبة ووظائف خادم مع تصميم UI/UX محسّن لتفاعل أفضل.",
          tech: "React، PHP، Laravel، Docker",
        },
        {
          name: "مراقبة البنية التحتية",
          desc: "تنفيذ حلول مراقبة استباقية وأنظمة نسخ احتياطي واستعادة بعد الكوارث.",
          tech: "Microsoft 365، PowerShell، Linux",
        },
      ],
    },
    skills: {
      title: "المهارات",
      categories: [
        { name: "البنية التحتية والخوادم", items: ["إدارة Windows Server", "Active Directory وسياسة المجموعة", "تثبيت وتكوين الأنظمة", "النسخ الاحتياطي واستعادة الكوارث"] },
        { name: "السحابة والأمان", items: ["Microsoft Entra ID (Azure AD)", "مركز إدارة Microsoft 365", "أمان Azure (SC-200/300/401)", "دعم تقني (L1/L2)"] },
        { name: "التطوير", items: ["React", "JavaScript", "PHP & Laravel", "Python", "HTML/CSS/Bootstrap"] },
        { name: "الأدوات والمنصات", items: ["Docker", "Git & GitHub", "إدارة Linux", "VS Code", "أدوات الدعم عن بُعد"] },
      ],
    },
    contact: {
      title: "تواصل معي",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "الرسالة",
      send: "إرسال الرسالة",
      namePlaceholder: "أدخل اسمك",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      messagePlaceholder: "اكتب رسالتك هنا...",
      info: {
        email: "lakshankumarathunga42@gmail.com",
        phone: "+971-5436-45103",
        location: "المدينة الأكاديمية، دبي، الإمارات",
        linkedin: "www.linkedin.com/in/lakshan-kumarathunga-1039a8264",
      },
    },
    certifications: {
      title: "الشهادات",
      items: [
        "أساسيات تكنولوجيا المعلومات – سيسكو (٢٠٢٥)",
        "مسؤول Azure من مايكروسوفت (تدريب AZ-104) (٢٠٢٤–٢٠٢٥)",
        "مقدمة في الأمن السيبراني – سيسكو (٢٠٢٤)",
        "تصميم الويب – جامعة موراتوا (٢٠٢٤)",
        "دبلوم تصميم وتطوير الويب (٢٠٢٣–٢٠٢٤)",
        "شهادة تكنولوجيا الهندسة (٢٠٢١–٢٠٢٣)",
      ],
    },
    footer: "© ٢٠٢٦ لكشان كوماراتونجا | ملف شخصي متعدد اللغات",
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "自己紹介",
      education: "学歴",
      experience: "職歴",
      projects: "プロジェクト",
      skills: "スキル",
      contact: "お問い合わせ",
    },
    hero: {
      name: "ラクシャン・クマラトゥンガ",
      title: "ITインフラエンジニア | Azure＆クラウドセキュリティ",
      summary: "ITサポート、Web開発、AIソリューションの実務経験を持ち、UAEの急速に進化するテクノロジー分野に対応する未来志向のITプロフェッショナル。",
      downloadCV: "履歴書をダウンロード",
      contactMe: "お問い合わせ",
    },
    about: {
      title: "自己紹介",
      p1: "私は高い適応力を持つITプロフェッショナルであり、現代のビジネスとデジタルトランスフォーメーションの要求に応えるため、常にスキルを向上させています。スリランカとUAEの企業でITインフラ管理、Web開発、AIソリューションの経験があります。",
      p2: "イノベーション、自動化、スマートシステムを日常業務に統合することで、ルーチン業務を超えた価値を提供します。成長、効率、技術的進歩を優先する組織への貢献を目指しています。",
    },
    education: {
      title: "学歴",
      items: [
        {
          degree: "情報システム管理学 理学士号",
          school: "マニパル高等教育アカデミー – ドバイ、UAE",
          year: "在学中（2027年卒業予定）",
          desc: "重点分野：ITインフラ、データベース管理、クラウドコンピューティング、Web技術、AI応用。",
        },
        {
          degree: "Microsoftセキュリティエンジニアディプロマ（SC-200, SC-300, SC-401）",
          school: "NextGenキャンパス – スリランカ",
          year: "2025年1月 – 2026年1月",
          desc: "セキュリティオペレーションアナリスト、IDおよびアクセス管理者、情報保護＆コンプライアンス管理者。",
        },
        {
          degree: "Webデザイン＆開発ディプロマ",
          school: "ウォールトンインターナショナルキャンパス – スリランカ（QBUK、英国）",
          year: "2023年7月 – 2024年7月",
          desc: "HTML、CSS、Bootstrap、JavaScript、jQuery、PHP、MySQL、最終Webアプリケーションプロジェクト。",
        },
      ],
    },
    experience: {
      title: "職歴",
      items: [
        {
          role: "ITエグゼクティブ",
          company: "ジョン・キールズ消費者食品部門 – スリランカ",
          period: "2024年4月 – 2025年9月",
          desc: "ITインフラの管理、テクニカルサポートの提供、クラウド移行・近代化プロジェクトの支援、データセキュリティコンプライアンスの確保。",
        },
        {
          role: "ITサポートスペシャリスト＆ハードウェアエンジニアリング",
          company: "ソフトロジック情報技術 – スリランカ",
          period: "2023年2月 – 2024年2月",
          desc: "PC、ラップトップ、サーバー、ネットワークシステムのテクニカルサポート。LAN/WANネットワーキング、Windows・LinuxOS管理。",
        },
        {
          role: "Web開発者（リモート）",
          company: "Appsdeptインダストリアル – スリランカ",
          period: "2024年9月 – 2025年1月",
          desc: "React、PHP、Python、Laravelを使用したフロントエンド・バックエンドWebアプリケーションの開発。DockerとLinux環境でのデプロイ。",
        },
      ],
    },
    projects: {
      title: "プロジェクト",
      items: [
        {
          name: "クラウドインフラ移行",
          desc: "エンタープライズクライアント向けにスケーラビリティとパフォーマンスを向上させるクラウド移行・近代化プロジェクトを主導。",
          tech: "Azure、Windows Server、Active Directory",
        },
        {
          name: "レスポンシブWebアプリケーション",
          desc: "レスポンシブUIとサーバーサイド機能を構築し、ユーザーエンゲージメントを向上させるUI/UXデザインを改善。",
          tech: "React、PHP、Laravel、Docker",
        },
        {
          name: "ITインフラ監視",
          desc: "システムの安定性とパフォーマンスを確保するためのプロアクティブ監視ソリューションとバックアップ＆災害復旧システムを実装。",
          tech: "Microsoft 365、PowerShell、Linux",
        },
      ],
    },
    skills: {
      title: "スキル",
      categories: [
        { name: "インフラ＆サーバー", items: ["Windows Server管理", "Active Directory＆グループポリシー", "システムインストール＆設定", "バックアップ＆災害復旧"] },
        { name: "クラウド＆セキュリティ", items: ["Microsoft Entra ID (Azure AD)", "Microsoft 365管理センター", "Azureセキュリティ (SC-200/300/401)", "ITサポート (L1/L2)"] },
        { name: "開発", items: ["React", "JavaScript", "PHP & Laravel", "Python", "HTML/CSS/Bootstrap"] },
        { name: "ツール＆プラットフォーム", items: ["Docker", "Git & GitHub", "Linux管理", "VS Code", "リモートデスクトップ＆ヘルプデスクツール"] },
      ],
    },
    contact: {
      title: "お問い合わせ",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      messageLabel: "メッセージ",
      send: "メッセージを送信",
      namePlaceholder: "お名前を入力してください",
      emailPlaceholder: "メールアドレスを入力してください",
      messagePlaceholder: "メッセージをここに入力してください...",
      info: {
        email: "lakshankumarathunga42@gmail.com",
        phone: "+971-5436-45103",
        location: "アカデミックシティ、ドバイ、UAE",
        linkedin: "www.linkedin.com/in/lakshan-kumarathunga-1039a8264",
      },
    },
    certifications: {
      title: "資格認定",
      items: [
        "ITエッセンシャルズ – Cisco (2025)",
        "Microsoft Azure管理者 (AZ-104トレーニング) (2024–2025)",
        "サイバーセキュリティ入門 – Cisco (2024)",
        "Webデザイン – モラトゥワ大学 (2024)",
        "Webデザイン＆開発ディプロマ (2023–2024)",
        "エンジニアリング技術証明書 (2021–2023)",
      ],
    },
    footer: "© 2026 ラクシャン・クマラトゥンガ | 多言語ポートフォリオ",
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      education: "教育背景",
      experience: "工作经验",
      projects: "项目",
      skills: "技能",
      contact: "联系我",
    },
    hero: {
      name: "拉克山·库马拉通加",
      title: "IT基础设施工程师 | Azure与云安全",
      summary: "一位面向未来的IT专业人士，在IT支持、Web开发和AI解决方案方面拥有实践经验，与阿联酋快速发展的技术格局保持一致。",
      downloadCV: "下载简历",
      contactMe: "联系我",
    },
    about: {
      title: "关于我",
      p1: "我是一名高度适应性强的IT专业人士，不断提升技能以满足现代商业和数字化转型需求。我的经验涵盖斯里兰卡和阿联酋企业的IT基础设施管理、Web开发和AI解决方案。",
      p2: "我通过将创新、自动化和智能系统融入日常运营，提供超越常规任务的价值。我的目标是为优先考虑增长、效率和技术进步的组织做出贡献。",
    },
    education: {
      title: "教育背景",
      items: [
        {
          degree: "信息系统管理理学学士",
          school: "马尼帕尔高等教育学院 – 迪拜，阿联酋",
          year: "在读（预计2027年毕业）",
          desc: "重点领域：IT基础设施、数据库管理、云计算、Web技术、AI应用。",
        },
        {
          degree: "微软安全工程师文凭（SC-200, SC-300, SC-401）",
          school: "NextGen Campus – 斯里兰卡",
          year: "2025年1月 – 2026年1月",
          desc: "安全运营分析师、身份和访问管理员、信息保护与合规管理员。",
        },
        {
          degree: "网页设计与开发文凭",
          school: "沃尔顿国际校区 – 斯里兰卡（QBUK，英国）",
          year: "2023年7月 – 2024年7月",
          desc: "HTML、CSS、Bootstrap、JavaScript、jQuery、PHP、MySQL及最终Web应用项目。",
        },
      ],
    },
    experience: {
      title: "工作经验",
      items: [
        {
          role: "信息技术主管",
          company: "约翰·基尔斯消费食品部门 – 斯里兰卡",
          period: "2024年4月 – 2025年9月",
          desc: "管理IT基础设施，提供技术支持，支持云迁移和现代化项目，确保数据安全合规并实施主动监控解决方案。",
        },
        {
          role: "IT支持专员与硬件工程",
          company: "Softlogic信息技术 – 斯里兰卡",
          period: "2023年2月 – 2024年2月",
          desc: "为PC、笔记本电脑、服务器和网络系统提供技术支持。管理LAN/WAN网络、Windows和Linux操作系统。",
        },
        {
          role: "Web开发人员（远程）",
          company: "Appsdept Industrial – 斯里兰卡",
          period: "2024年9月 – 2025年1月",
          desc: "使用React、PHP、Python和Laravel开发前端和后端Web应用程序。使用Docker和Linux环境进行部署。",
        },
      ],
    },
    projects: {
      title: "项目",
      items: [
        {
          name: "云基础设施迁移",
          desc: "主导云迁移和现代化项目，为企业客户提升可扩展性和性能。",
          tech: "Azure、Windows Server、Active Directory",
        },
        {
          name: "响应式Web应用",
          desc: "构建响应式用户界面和服务器端功能，改进UI/UX设计以提升用户参与度。",
          tech: "React、PHP、Laravel、Docker",
        },
        {
          name: "IT基础设施监控",
          desc: "实施主动监控解决方案和备份与灾难恢复系统，确保系统稳定性和性能。",
          tech: "Microsoft 365、PowerShell、Linux",
        },
      ],
    },
    skills: {
      title: "技能",
      categories: [
        { name: "基础设施与服务器", items: ["Windows Server管理", "Active Directory与组策略", "系统安装与配置", "备份与灾难恢复"] },
        { name: "云与安全", items: ["Microsoft Entra ID (Azure AD)", "Microsoft 365管理中心", "Azure安全 (SC-200/300/401)", "IT支持 (L1/L2)"] },
        { name: "开发", items: ["React", "JavaScript", "PHP & Laravel", "Python", "HTML/CSS/Bootstrap"] },
        { name: "工具与平台", items: ["Docker", "Git & GitHub", "Linux管理", "VS Code", "远程桌面与帮助台工具"] },
      ],
    },
    contact: {
      title: "联系我",
      nameLabel: "姓名",
      emailLabel: "电子邮件",
      messageLabel: "留言",
      send: "发送消息",
      namePlaceholder: "请输入您的姓名",
      emailPlaceholder: "请输入您的电子邮件",
      messagePlaceholder: "在此输入您的消息...",
      info: {
        email: "lakshankumarathunga42@gmail.com",
        phone: "+971-5436-45103",
        location: "学术城，迪拜，阿联酋",
        linkedin: "www.linkedin.com/in/lakshan-kumarathunga-1039a8264",
      },
    },
    certifications: {
      title: "认证证书",
      items: [
        "IT基础 – Cisco (2025)",
        "微软Azure管理员 (AZ-104培训) (2024–2025)",
        "网络安全入门 – Cisco (2024)",
        "网页设计 – 莫拉图瓦大学 (2024)",
        "网页设计与开发文凭 (2023–2024)",
        "工程技术证书 (2021–2023)",
      ],
    },
    footer: "© 2026 拉克山·库马拉通加 | 多语言作品集",
  },
};
