-- seed database with sample conferences
DELETE FROM conference;

INSERT INTO conference( display_id, name, website, logo_url, logo_dark_bg, description ) VALUES 
  ( 'goto', 'GOTO', 'https://gotocon.com', 'https://pbs.twimg.com/profile_images/970998998541709313/JO1KXi8r_400x400.jpg', FALSE, 'GOTO Conferences are the premier worldwide vendor-neutral conferences for developers, software architects and managers in professional software development. GOTO covers current topics broadly across technologies, trends, methods and best-practices.' ),
  ( 'kubecon', 'KubeCon', 'https://kubecon.io', 'https://pbs.twimg.com/profile_images/913421906157592576/NmxUeefn_400x400.jpg', TRUE, 'The flagship conference from Cloud Native Computing Foundation that gathers adopters and technologists from leading open source and cloud native communities.' ),
  ( 'jsconf', 'JSConf', 'https://jsconf.com', 'https://jsconf.com/images/jsconf_us.png', FALSE, 'JSConf US is the only conference where you can learn how to push your favorite language beyond the confines of the browser and into robots, and video games.' ),
  ( 'oscon', 'OSCON', 'http://www.oscon.com', 'https://pbs.twimg.com/profile_images/1195374636885827585/i3TZcLDX_400x400.jpg', TRUE, 'Learn about leading-edge software development incorporating AI, cloud technology, and distributed computing.' ),
  ( 'qcon', 'QCon', 'https://qconferences.com', 'https://qconferences.com/themes/qcon/logo.svg', FALSE, 'Helping senior software developers adopt new technologies and practices. Learn from a global professional engineering community. Adopt the right software innovations and practices. Discover your future tech vision.' ),
  ( 'aws-summit', 'AWS Summit', 'https://aws.amazon.com/events/summits', 'https://d1.awsstatic.com/webteam/homepage/heroes/logos/Site-Merch_Summit-General_Hero-Logo.a72b177b4f8ae6b105542e64cedd7a01d88e7931.png', TRUE, 'AWS Global Summits are free events that bring the cloud computing community together to connect, collaborate, and learn about AWS.' )
;
