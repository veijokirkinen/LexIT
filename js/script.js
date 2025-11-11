// LexIT JavaScript - Back to top functionality
console.log('LexIT loading...');

// Termien tietokanta hakua varten
const termsDatabase = [
    // Yleiset IT-lyhenteet (19 termiä)
    { term: "BIOS", fullName: "Basic Input/Output System", category: "yleiset.html", description: "Tietokoneen käynnistysjärjestelmä" },
    { term: "CPU", fullName: "Central Processing Unit", category: "yleiset.html", description: "Tietokoneen suoritin" },
    { term: "FAQ", fullName: "Frequently Asked Questions", category: "yleiset.html", description: "Usein kysytyt kysymykset" },
    { term: "GPU", fullName: "Graphics Processing Unit", category: "yleiset.html", description: "Näytönohjain" },
    { term: "HDD", fullName: "Hard Disk Drive", category: "yleiset.html", description: "Kiintolevy" },
    { term: "HDMI", fullName: "High-Definition Multimedia Interface", category: "yleiset.html", description: "Kaapeliliitin" },
    { term: "HTML", fullName: "HyperText Markup Language", category: "yleiset.html", description: "Verkkosivujen merkintäkieli" },
    { term: "ICT", fullName: "Information and Communication Technology", category: "yleiset.html", description: "Tieto- ja viestintätekniikka" },
    { term: "IT", fullName: "Information Technology", category: "yleiset.html", description: "Tietotekniikka" },
    { term: "OS", fullName: "Operating System", category: "yleiset.html", description: "Käyttöjärjestelmä" },
    { term: "PDF", fullName: "Portable Document Format", category: "yleiset.html", description: "Tiedostomuoto" },
    { term: "QR", fullName: "Quick Response", category: "yleiset.html", description: "Neliönmuotoinen viivakoodi" },
    { term: "RAM", fullName: "Random Access Memory", category: "yleiset.html", description: "Tietokoneen työmuisti" },
    { term: "SQL", fullName: "Structured Query Language", category: "yleiset.html", description: "Tietokantojen kyselykieli" },
    { term: "SSD", fullName: "Solid State Drive", category: "yleiset.html", description: "SSD-levy" },
    { term: "UEFI", fullName: "Unified Extensible Firmware Interface", category: "yleiset.html", description: "Moderni BIOS" },
    { term: "UPS", fullName: "Uninterruptible Power Supply", category: "yleiset.html", description: "Keskeytymätön virransyöttö" },
    { term: "URL", fullName: "Uniform Resource Locator", category: "yleiset.html", description: "Internet-osoite" },
    { term: "USB", fullName: "Universal Serial Bus", category: "yleiset.html", description: "Yleisliitin" },

    // Verkko ja protokollat (39 termiä)
    { term: "API", fullName: "Application Programming Interface", category: "verkko.html", description: "Ohjelmointirajapinta" },
    { term: "BGP", fullName: "Border Gateway Protocol", category: "verkko.html", description: "Internetin reititysprotokolla" },
    { term: "CDN", fullName: "Content Delivery Network", category: "verkko.html", description: "Sisällönjakeluyerkosto" },
    { term: "DHCP", fullName: "Dynamic Host Configuration Protocol", category: "verkko.html", description: "Automaattinen IP-osoitteiden jako" },
    { term: "DNS", fullName: "Domain Name System", category: "verkko.html", description: "Nimipalvelujärjestelmä" },
    { term: "FTP", fullName: "File Transfer Protocol", category: "verkko.html", description: "Tiedostonsiirtoprotokolla" },
    { term: "HTTP", fullName: "HyperText Transfer Protocol", category: "verkko.html", description: "Web-siirtoprotokolla" },
    { term: "HTTPS", fullName: "HTTP Secure", category: "verkko.html", description: "Salattu HTTP" },
    { term: "ICMP", fullName: "Internet Control Message Protocol", category: "verkko.html", description: "Internetin kontrollipyyntöprotokolla" },
    { term: "IP", fullName: "Internet Protocol", category: "verkko.html", description: "Internet-protokolla" },
    { term: "ISP", fullName: "Internet Service Provider", category: "verkko.html", description: "Internetpalveluntarjoaja" },
    { term: "LAN", fullName: "Local Area Network", category: "verkko.html", description: "Lähiverkko" },
    { term: "MTConnect", fullName: "Manufacturing Technology Connect", category: "verkko.html", description: "Teollisuuskoneistojen tiedonjakostandardi" },
    { term: "NAT", fullName: "Network Address Translation", category: "verkko.html", description: "Verkko-osoitteiden käännös" },
    { term: "OPC UA", fullName: "OPC Unified Architecture", category: "verkko.html", description: "Teollisuuden standardiprotokolla" },
    { term: "SMTP", fullName: "Simple Mail Transfer Protocol", category: "verkko.html", description: "Sähköpostin lähetysprotokolla" },
    { term: "SSH", fullName: "Secure Shell", category: "verkko.html", description: "Turvallinen etähallintayhteys" },
    { term: "TCP", fullName: "Transmission Control Protocol", category: "verkko.html", description: "Siirtoprotokolla" },
    { term: "UDP", fullName: "User Datagram Protocol", category: "verkko.html", description: "Käyttäjätietogrammaprotokolla" },
    { term: "VPN", fullName: "Virtual Private Network", category: "verkko.html", description: "Virtuaalinen yksityisverkko" },
    { term: "WLAN", fullName: "Wireless Local Area Network", category: "verkko.html", description: "Langaton lähiverkko" },

    // Pilvi, virtualisointi ja kontit (19 termiä)
    { term: "AMI", fullName: "Amazon Machine Image", category: "pilvi.html", description: "AWS:n valmis tietokonekuva" },
    { term: "Auto Scaling", fullName: "Auto Scaling", category: "pilvi.html", description: "Automaattinen skaalautuminen" },
    { term: "AWS", fullName: "Amazon Web Services", category: "pilvi.html", description: "Amazonin pilvipalvelut" },
    { term: "Azure", fullName: "Microsoft Azure", category: "pilvi.html", description: "Microsoftin pilvipalvelut" },
    { term: "CDN", fullName: "Content Delivery Network", category: "pilvi.html", description: "Sisällönjakeluyerkosto" },
    { term: "Docker", fullName: "Docker", category: "pilvi.html", description: "Kontiteknologia" },
    { term: "EC2", fullName: "Elastic Compute Cloud", category: "pilvi.html", description: "AWS:n palvelinpalvelu" },
    { term: "GCP", fullName: "Google Cloud Platform", category: "pilvi.html", description: "Googlen pilvipalvelut" },
    { term: "HCI", fullName: "Hyperconverged Infrastructure", category: "pilvi.html", description: "Yhdistetty infrastruktuuri" },
    { term: "IaaS", fullName: "Infrastructure as a Service", category: "pilvi.html", description: "Infrastruktuuri pilvipalveluna" },
    { term: "K8s", fullName: "Kubernetes", category: "pilvi.html", description: "Kontiorkestraatio" },
    { term: "Kubernetes", fullName: "Kubernetes", category: "pilvi.html", description: "Kontiorkestraatio" },
    { term: "KVM", fullName: "Kernel-based Virtual Machine", category: "pilvi.html", description: "Linux virtualisointiteknologia" },
    { term: "Load Balancer", fullName: "Load Balancer", category: "pilvi.html", description: "Kuormanjako" },
    { term: "OCI", fullName: "Open Container Initiative", category: "pilvi.html", description: "Avoin konttistandardi" },
    { term: "PaaS", fullName: "Platform as a Service", category: "pilvi.html", description: "Alusta pilvipalveluna" },
    { term: "S3", fullName: "Simple Storage Service", category: "pilvi.html", description: "AWS:n tallennuspalvelu" },
    { term: "SaaS", fullName: "Software as a Service", category: "pilvi.html", description: "Ohjelmisto pilvipalveluna" },
    { term: "VDI", fullName: "Virtual Desktop Infrastructure", category: "pilvi.html", description: "Virtuaalinen työpöytäinfrastruktuuri" },
    { term: "VM", fullName: "Virtual Machine", category: "pilvi.html", description: "Virtuaalitietokone" },
    
    // Tietoturva ja suojaus (26 termiä)
    { term: "2FA", fullName: "Two-Factor Authentication", category: "turva.html", description: "Kaksivaiheinen tunnistautuminen" },
    { term: "ABAC", fullName: "Attribute-Based Access Control", category: "turva.html", description: "Attribuuttipohjainen kulunvalvonta" },
    { term: "CA", fullName: "Certificate Authority", category: "turva.html", description: "Sertifiointiviranomainen" },
    { term: "CSRF", fullName: "Cross-Site Request Forgery", category: "turva.html", description: "Sivustojen välinen pyynnön väärentäminen" },
    { term: "DLP", fullName: "Data Loss Prevention", category: "turva.html", description: "Tietovuotojen ehkäisy" },
    { term: "FIDO", fullName: "Fast IDentity Online", category: "turva.html", description: "Nopea verkkoidentiteetti" },
    { term: "GDPR", fullName: "General Data Protection Regulation", category: "turva.html", description: "EU:n tietosuoja-asetus" },
    { term: "IDS", fullName: "Intrusion Detection System", category: "turva.html", description: "Tunkeutumisen tunnistusjärjestelmä" },
    { term: "IPS", fullName: "Intrusion Prevention System", category: "turva.html", description: "Tunkeutumisen estojärjestelmä" },
    { term: "JWT", fullName: "JSON Web Token", category: "turva.html", description: "JSON-pohjainen tunniste" },
    { term: "LDAP", fullName: "Lightweight Directory Access Protocol", category: "turva.html", description: "Kevyt hakemistoprotokolla" },
    { term: "MFA", fullName: "Multi-Factor Authentication", category: "turva.html", description: "Monivaiheinen tunnistautuminen" },
    { term: "OAuth2", fullName: "OAuth 2.0", category: "turva.html", description: "Valtuutusprotokolla" },
    { term: "OTP", fullName: "One-Time Password", category: "turva.html", description: "Kertakäyttösalasana" },
    { term: "OWASP", fullName: "Open Web Application Security Project", category: "turva.html", description: "Avoin tietoturvaprojekti" },
    { term: "PCI DSS", fullName: "Payment Card Industry Data Security Standard", category: "turva.html", description: "Maksukorttien tietoturvstandardi" },
    { term: "PKI", fullName: "Public Key Infrastructure", category: "turva.html", description: "Julkisen avaimen infrastruktuuri" },
    { term: "RBAC", fullName: "Role-Based Access Control", category: "turva.html", description: "Roolipohjainen kulunvalvonta" },
    { term: "SAML", fullName: "Security Assertion Markup Language", category: "turva.html", description: "Tietoturvaväitteiden merkintäkieli" },
    { term: "SIEM", fullName: "Security Information and Event Management", category: "turva.html", description: "Tietoturvatietojen ja -tapahtumien hallinta" },
    { term: "SOC", fullName: "Security Operations Center", category: "turva.html", description: "Tietoturvakeskus" },
    { term: "SOC 2", fullName: "Service Organization Control 2", category: "turva.html", description: "Palveluorganisaation valvonta" },
    { term: "SSO", fullName: "Single Sign-On", category: "turva.html", description: "Kertakirjautuminen" },
    { term: "VPN", fullName: "Virtual Private Network", category: "turva.html", description: "Virtuaalinen yksityisverkko" },
    { term: "X509", fullName: "X.509 Certificate Standard", category: "turva.html", description: "X.509 sertifikaattistandardi" },
    { term: "XSS", fullName: "Cross-Site Scripting", category: "turva.html", description: "Sivustojen välinen skriptien ajaminen" },
    
    // AI ja koneoppiminen (20 termiä)
    { term: "AI", fullName: "Artificial Intelligence", category: "ai.html", description: "Tekoäly" },
    { term: "BERT", fullName: "Bidirectional Encoder Representations from Transformers", category: "ai.html", description: "Kaksisuuntainen kielimalli" },
    { term: "CNN", fullName: "Convolutional Neural Network", category: "ai.html", description: "Konvolutiivinen neuroverkko" },
    { term: "DL", fullName: "Deep Learning", category: "ai.html", description: "Syväoppiminen" },
    { term: "Fine-tuning", fullName: "Fine-tuning", category: "ai.html", description: "Hienosäätö" },
    { term: "GAN", fullName: "Generative Adversarial Network", category: "ai.html", description: "Vastakkainasetteleva generatiivinen verkko" },
    { term: "GPU", fullName: "Graphics Processing Unit", category: "ai.html", description: "Näytönohjain massalaskentaan" },
    { term: "GPT", fullName: "Generative Pre-trained Transformer", category: "ai.html", description: "Generatiivinen esi-koulutettu muuntaja" },
    { term: "LLM", fullName: "Large Language Model", category: "ai.html", description: "Suuri kielimalli" },
    { term: "ML", fullName: "Machine Learning", category: "ai.html", description: "Koneoppiminen" },
    { term: "MLM", fullName: "Masked Language Model", category: "ai.html", description: "Peitetty kielimalli" },
    { term: "MLOps", fullName: "Machine Learning Operations", category: "ai.html", description: "Koneoppimisen operaatiot" },
    { term: "MoE", fullName: "Mixture of Experts", category: "ai.html", description: "Asiantuntijoiden sekoitus" },
    { term: "NLP", fullName: "Natural Language Processing", category: "ai.html", description: "Luonnollisen kielen käsittely" },
    { term: "RAG", fullName: "Retrieval-Augmented Generation", category: "ai.html", description: "Hakutoiminnolla tuettu generointi" },
    { term: "RL", fullName: "Reinforcement Learning", category: "ai.html", description: "Vahvistusoppiminen" },
    { term: "RNN", fullName: "Recurrent Neural Network", category: "ai.html", description: "Toistuva neuroverkko" },
    { term: "SLM", fullName: "Small Language Model", category: "ai.html", description: "Pieni kielimalli" },
    { term: "TPU", fullName: "Tensor Processing Unit", category: "ai.html", description: "Tensoriprosessoriyksikkö" },
    { term: "VLM", fullName: "Vision-Language Model", category: "ai.html", description: "Näkö-kielimalli" },

    // Microsoft (muutama esimerkki)  
    { term: "AD", fullName: "Active Directory", category: "microsoft.html", description: "Aktiivihakemisto" },
    { term: "Azure AD", fullName: "Azure Active Directory", category: "microsoft.html", description: "Pilvipohjainen aktiivihakemisto" },
    { term: "Intune", fullName: "Microsoft Intune", category: "microsoft.html", description: "Päätelaitehallinta" },
    
    // Sovelluskehitys ja DevOps (23 termiä)
    { term: "AIOps", fullName: "Artificial Intelligence for IT Operations", category: "devops.html", description: "Tekoäly IT-operaatioissa" },
    { term: "Ansible", fullName: "Ansible", category: "devops.html", description: "Konfigurointityökalu" },
    { term: "APM", fullName: "Application Performance Monitoring", category: "devops.html", description: "Sovellusten suorituskyvyn valvonta" },
    { term: "CD", fullName: "Continuous Delivery", category: "devops.html", description: "Jatkuva toimitus" },
    { term: "CI", fullName: "Continuous Integration", category: "devops.html", description: "Jatkuva integrointi" },
    { term: "Git", fullName: "Git", category: "devops.html", description: "Versionhallintajärjestelmä" },
    { term: "GitHub Actions", fullName: "GitHub Actions", category: "devops.html", description: "GitHubin automaatioalusta" },
    { term: "GitLab CI", fullName: "GitLab CI", category: "devops.html", description: "GitLabin jatkuva integrointi" },
    { term: "GitOps", fullName: "GitOps", category: "devops.html", description: "Git-pohjainen infrastruktuurin hallinta" },
    { term: "gRPC", fullName: "gRPC", category: "devops.html", description: "Palveluiden välinen protokolla" },
    { term: "IaC", fullName: "Infrastructure as Code", category: "devops.html", description: "Infrastruktuuri koodina" },
    { term: "IDE", fullName: "Integrated Development Environment", category: "devops.html", description: "Kehitysympäristö" },
    { term: "Jenkins", fullName: "Jenkins", category: "devops.html", description: "CI/CD automaatiopalvelin" },
    { term: "JSON-RPC", fullName: "JSON-RPC", category: "devops.html", description: "JSON-pohjainen protokolla" },
    { term: "Maven", fullName: "Maven", category: "devops.html", description: "Build-automaatiotyökalu" },
    { term: "npm", fullName: "Node Package Manager", category: "devops.html", description: "Node.js paketinhallinta" },
    { term: "REST", fullName: "Representational State Transfer", category: "devops.html", description: "Web API -arkkitehtuurityyli" },
    { term: "SCM", fullName: "Source Code Management", category: "devops.html", description: "Lähdekoodin hallinta" },
    { term: "SDK", fullName: "Software Development Kit", category: "devops.html", description: "Ohjelmistokehityspaketti" },
    { term: "SOAP", fullName: "Simple Object Access Protocol", category: "devops.html", description: "Web-palveluprotokolla" },
    { term: "SRE", fullName: "Site Reliability Engineering", category: "devops.html", description: "Sivuston luotettavuustekniikka" },
    { term: "Terraform", fullName: "Terraform", category: "devops.html", description: "Infrastructure as Code -työkalu" },
    { term: "YAML", fullName: "YAML Ain't Markup Language", category: "devops.html", description: "Ihmisluettava datan serialisointiformaatti" },
    
    // Tallennus ja protokollat (3 termiä)
    { term: "Ceph", fullName: "Ceph", category: "tallennus.html", description: "Hajautettu tallennusjärjestelmä" },
    { term: "Lustre", fullName: "Lustre", category: "tallennus.html", description: "Rinnakkainen tiedostojärjestelmä" },
    { term: "NFS", fullName: "Network File System", category: "tallennus.html", description: "Unix tiedostonjakoprotokolla" },
    
    // Tietokannat ja data (22 termiä)
    { term: "ACID", fullName: "Atomicity, Consistency, Isolation, Durability", category: "data.html", description: "Tietokannan luotettavuusominaisuudet" },
    { term: "API", fullName: "Application Programming Interface", category: "data.html", description: "Ohjelmointirajapinta" },
    { term: "BASE", fullName: "Basically Available, Soft state, Eventual consistency", category: "data.html", description: "NoSQL-tietokantojen ominaisuudet" },
    { term: "CDC", fullName: "Change Data Capture", category: "data.html", description: "Tietomuutosten tallentaminen" },
    { term: "CRUD", fullName: "Create, Read, Update, Delete", category: "data.html", description: "Tietokannan perusoperaatiot" },
    { term: "CSV", fullName: "Comma-Separated Values", category: "data.html", description: "Pilkulla eroteltu tiedostomuoto" },
    { term: "Data Lake", fullName: "Data Lake", category: "data.html", description: "Laaja datavarasto raakamuotoiselle datalle" },
    { term: "DB", fullName: "Database", category: "data.html", description: "Tietokanta" },
    { term: "DBMS", fullName: "Database Management System", category: "data.html", description: "Tietokannanhallintajärjestelmä" },
    { term: "DWH", fullName: "Data Warehouse", category: "data.html", description: "Tietovarasto" },
    { term: "ELT", fullName: "Extract, Load, Transform", category: "data.html", description: "Datan käsittelyprosessi" },
    { term: "ETL", fullName: "Extract, Transform, Load", category: "data.html", description: "Datan käsittelyprosessi" },
    { term: "JSON", fullName: "JavaScript Object Notation", category: "data.html", description: "Tiedonsiirtoformaatti" },
    { term: "NAS", fullName: "Network Attached Storage", category: "data.html", description: "Verkkoliitetty tallennuslaite" },
    { term: "NoSQL", fullName: "Not Only SQL", category: "data.html", description: "Ei-relaationiset tietokannat" },
    { term: "OLAP", fullName: "Online Analytical Processing", category: "data.html", description: "Analyyttinen tietojenkäsittely" },
    { term: "OLTP", fullName: "Online Transaction Processing", category: "data.html", description: "Transaktioiden käsittely" },
    { term: "RAID", fullName: "Redundant Array of Independent Disks", category: "data.html", description: "Levyjen yhdistäminen vikasietoisuutta varten" },
    { term: "SAN", fullName: "Storage Area Network", category: "data.html", description: "Tallennusalueen verkko" },
    { term: "SMB", fullName: "Server Message Block", category: "data.html", description: "Tiedostonjakoprotokolla" },
    { term: "SQL", fullName: "Structured Query Language", category: "data.html", description: "Tietokantojen kyselykieli" },
    { term: "XML", fullName: "eXtensible Markup Language", category: "data.html", description: "Merkintäkieli" },
    
    // Microsoft & päätelaitteiden hallinta (31 termiä)
    { term: "AD", fullName: "Active Directory", category: "microsoft.html", description: "Microsoftin aktiivihakemisto" },
    { term: "Autopilot", fullName: "Windows Autopilot", category: "microsoft.html", description: "Windows-laitteiden automaattinen määritys" },
    { term: "Azure AD", fullName: "Azure Active Directory", category: "microsoft.html", description: "Pilvipohjainen aktiivihakemisto" },
    { term: "BYOD", fullName: "Bring Your Own Device", category: "microsoft.html", description: "Tuo oma laitteesi" },
    { term: "Co-management", fullName: "Co-management", category: "microsoft.html", description: "SCCM + Intune yhteiskäyttö" },
    { term: "COPE", fullName: "Company Owned, Personally Enabled", category: "microsoft.html", description: "Yrityksen omistama, henkilökohtaiseen käyttöön" },
    { term: "Dataflow", fullName: "Power BI Dataflows", category: "microsoft.html", description: "Power BI:n tietovirtaukset" },
    { term: "DAX", fullName: "Data Analysis Expressions", category: "microsoft.html", description: "Tietoanalyysilausekkeet" },
    { term: "DP", fullName: "Distribution Point", category: "microsoft.html", description: "Jakelupiste" },
    { term: "EMM", fullName: "Enterprise Mobility Management", category: "microsoft.html", description: "Yritysmobiliteetin hallinta" },
    { term: "Exchange", fullName: "Microsoft Exchange Server", category: "microsoft.html", description: "Microsoftin sähköpostipalvelin" },
    { term: "GPO", fullName: "Group Policy Object", category: "microsoft.html", description: "Ryhmäkäytäntöobjekti" },
    { term: "Hyper-V", fullName: "Microsoft Hyper-V", category: "microsoft.html", description: "Microsoftin virtualisointialusta" },
    { term: "Intune", fullName: "Microsoft Intune", category: "microsoft.html", description: "Päätelaitehallintapalvelu" },
    { term: "M365", fullName: "Microsoft 365", category: "microsoft.html", description: "Microsoftin pilvipalvelupaketti" },
    { term: "MAM", fullName: "Mobile Application Management", category: "microsoft.html", description: "Mobiilisovellusten hallinta" },
    { term: "MDM", fullName: "Mobile Device Management", category: "microsoft.html", description: "Mobiililaitteiden hallinta" },
    { term: "MDT", fullName: "Microsoft Deployment Toolkit", category: "microsoft.html", description: "Microsoftin käyttöönotto-työkalupakki" },
    { term: "MECM", fullName: "Microsoft Endpoint Configuration Manager", category: "microsoft.html", description: "Microsoftin päätepisteiden hallinta" },
    { term: "Microsoft Fabric", fullName: "Microsoft Fabric", category: "microsoft.html", description: "Microsoftin analytiikka-alusta" },
    { term: "O365", fullName: "Office 365", category: "microsoft.html", description: "Office pilvipalveluna" },
    { term: "OneDrive", fullName: "Microsoft OneDrive", category: "microsoft.html", description: "Microsoftin pilvivarasto" },
    { term: "OOBE", fullName: "Out Of Box Experience", category: "microsoft.html", description: "Ensikäynnistyskokemus" },
    { term: "OSD", fullName: "Operating System Deployment", category: "microsoft.html", description: "Käyttöjärjestelmän käyttöönotto" },
    { term: "Power BI", fullName: "Microsoft Power BI", category: "microsoft.html", description: "Microsoftin liiketoiminta-analytiikka" },
    { term: "PXE", fullName: "Preboot eXecution Environment", category: "microsoft.html", description: "Verkkokäynnistysympäristö" },
    { term: "RLS", fullName: "Row-Level Security", category: "microsoft.html", description: "Rivitason tietoturva" },
    { term: "SCCM", fullName: "System Center Configuration Manager", category: "microsoft.html", description: "Järjestelmäkonfiguraation hallinta" },
    { term: "SharePoint", fullName: "Microsoft SharePoint", category: "microsoft.html", description: "Microsoftin yhteistyöalusta" },
    { term: "Teams", fullName: "Microsoft Teams", category: "microsoft.html", description: "Microsoftin yhteistyötyökalu" },
    { term: "UEM", fullName: "Unified Endpoint Management", category: "microsoft.html", description: "Yhtenäinen päätepisteiden hallinta" },
    { term: "WDS", fullName: "Windows Deployment Services", category: "microsoft.html", description: "Windows käyttöönottopalvelut" },
    { term: "WSUS", fullName: "Windows Server Update Services", category: "microsoft.html", description: "Windows Server -päivityspalvelut" },
    
    // Analytiikka, BI ja raportointi (21 termiä)
    { term: "BI", fullName: "Business Intelligence", category: "bi.html", description: "Liiketoimintatiedon hallinta" },
    { term: "Dashboard", fullName: "Dashboard", category: "bi.html", description: "Kojelauta" },
    { term: "Data Mart", fullName: "Data Mart", category: "bi.html", description: "Osavarasto" },
    { term: "DAX", fullName: "Data Analysis Expressions", category: "bi.html", description: "Tietoanalyysilausekkeet" },
    { term: "Drill Down", fullName: "Drill Down", category: "bi.html", description: "Syväporaus" },
    { term: "ETL", fullName: "Extract, Transform, Load", category: "bi.html", description: "Pura, muunna, lataa" },
    { term: "KPI", fullName: "Key Performance Indicator", category: "bi.html", description: "Avainindikaattori" },
    { term: "KPI Dashboard", fullName: "KPI Dashboard", category: "bi.html", description: "Mittarien kojelauta" },
    { term: "MDX", fullName: "Multidimensional Expressions", category: "bi.html", description: "Moniulotteiset lausekkeet" },
    { term: "MOLAP", fullName: "Multidimensional Online Analytical Processing", category: "bi.html", description: "Moniulotteinen analyyttinen käsittely" },
    { term: "OKR", fullName: "Objectives and Key Results", category: "bi.html", description: "Tavoitteet ja avaintulokset" },
    { term: "OLAP", fullName: "Online Analytical Processing", category: "bi.html", description: "Analyyttinen tietojenkäsittely" },
    { term: "ROI", fullName: "Return on Investment", category: "bi.html", description: "Sijoitetun pääoman tuotto" },
    { term: "ROLAP", fullName: "Relational Online Analytical Processing", category: "bi.html", description: "Relaatianalyyttinen käsittely" },
    { term: "Slice and Dice", fullName: "Slice and Dice", category: "bi.html", description: "Datan leikkaus ja pilkkominen" },
    { term: "SSAS", fullName: "SQL Server Analysis Services", category: "bi.html", description: "SQL Serverin analyysipalvelut" },
    { term: "SSIS", fullName: "SQL Server Integration Services", category: "bi.html", description: "SQL Serverin integrointipalvelut" },
    { term: "SSRS", fullName: "SQL Server Reporting Services", category: "bi.html", description: "SQL Serverin raportointipalvelut" },
    { term: "VIZ", fullName: "Visualization", category: "bi.html", description: "Visualisointi" },
    { term: "VQ", fullName: "Visual Query", category: "bi.html", description: "Visuaalinen kysely" },
    
    // IT-hallinto ja prosessit (20 termiä)
    { term: "Agile", fullName: "Agile", category: "itserv.html", description: "Ketterä kehittäminen" },
    { term: "Backlog", fullName: "Backlog", category: "itserv.html", description: "Työjono" },
    { term: "BCP", fullName: "Business Continuity Planning", category: "itserv.html", description: "Liiketoiminnan jatkuvuussuunnittelu" },
    { term: "BPM", fullName: "Business Process Management", category: "itserv.html", description: "Liiketoimintaprosessien hallinta" },
    { term: "CISO", fullName: "Chief Information Security Officer", category: "itserv.html", description: "Tietoturvapäällikkö" },
    { term: "CM", fullName: "Configuration Management", category: "itserv.html", description: "Konfiguraationhallinta" },
    { term: "CMDB", fullName: "Configuration Management Database", category: "itserv.html", description: "Konfiguraationhallintatietokanta" },
    { term: "CTO", fullName: "Chief Technology Officer", category: "itserv.html", description: "Teknologiajohtaja" },
    { term: "DevOps", fullName: "Development Operations", category: "itserv.html", description: "Kehitys ja käyttöönotto" },
    { term: "DR", fullName: "Disaster Recovery", category: "itserv.html", description: "Katastrofista palautuminen" },
    { term: "ITAM", fullName: "IT Asset Management", category: "itserv.html", description: "IT-omaisuuden hallinta" },
    { term: "ITIL", fullName: "Information Technology Infrastructure Library", category: "itserv.html", description: "IT-palveluhallintakehys" },
    { term: "ITSM", fullName: "IT Service Management", category: "itserv.html", description: "IT-palveluhallinta" },
    { term: "Kanban", fullName: "Kanban", category: "itserv.html", description: "Visuaalinen työnhallinta" },
    { term: "OLA", fullName: "Operational Level Agreement", category: "itserv.html", description: "Toimintatason sopimus" },
    { term: "RPA", fullName: "Robotic Process Automation", category: "itserv.html", description: "Robotiikkapohjainen prosessiautomaatio" },
    { term: "RPO", fullName: "Recovery Point Objective", category: "itserv.html", description: "Palautustavoite" },
    { term: "RTO", fullName: "Recovery Time Objective", category: "itserv.html", description: "Palautusaikatavoite" },
    { term: "Scrum", fullName: "Scrum", category: "itserv.html", description: "Ketterän kehityksen menetelmä" },
    { term: "SLA", fullName: "Service Level Agreement", category: "itserv.html", description: "Palvelutasosopimus" },
    { term: "Sprint", fullName: "Sprint", category: "itserv.html", description: "Kehitysjakso" },
];

// Hakufunktio
function searchTerms() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.innerHTML = '<p class="no-results">Kirjoita vähintään 2 merkkiä hakuun.</p>';
        return;
    }
    
    const results = termsDatabase.filter(term => 
        term.term.toLowerCase().includes(query) || 
        term.fullName.toLowerCase().includes(query) ||
        term.description.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">Ei tuloksia haulle: "' + query + '"</p>';
        return;
    }
    
    let html = '<h3>Hakutulokset (' + results.length + ' kpl):</h3>';
    html += '<div class="results-list">';
    
    results.forEach(result => {
        html += `
            <div class="result-item">
                <h4><a href="${result.category}" class="result-link">${result.term} — ${result.fullName}</a></h4>
                <p class="result-description">${result.description}</p>
                <span class="result-category">Kategoria: ${getCategoryName(result.category)}</span>
            </div>
        `;
    });
    
    html += '</div>';
    searchResults.innerHTML = html;
}

// Kategorian nimen haku
function getCategoryName(filename) {
    const categoryNames = {
        'yleiset.html': 'Yleiset IT-lyhenteet',
        'verkko.html': 'Verkko ja protokollat', 
        'pilvi.html': 'Pilvi, virtualisointi ja kontit',
        'turva.html': 'Tietoturva ja suojaus',
        'data.html': 'Tietokannat ja data',
        'devops.html': 'Sovelluskehitys ja DevOps',
        'microsoft.html': 'Microsoft & päätelaitteiden hallinta',
        'ai.html': 'AI ja koneoppiminen',
        'bi.html': 'Analytiikka, BI ja raportointi',
        'itserv.html': 'IT-hallinto ja prosessit',
        'tallennus.html': 'Tallennus ja protokollat'
    };
    return categoryNames[filename] || 'Tuntematon kategoria';
}

// Enter-näppäin hakukentässä
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchTerms();
            }
        });
    }
});

function setupBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '⬆';
    btn.setAttribute('title', 'Takaisin ylös');
    btn.setAttribute('aria-label', 'Takaisin ylös');
    
    document.body.appendChild(btn);
    
    function toggle() {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
    
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', toggle);
    toggle();
}

document.addEventListener('DOMContentLoaded', setupBackToTop);
