document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const specialty = urlParams.get('specialty');


    const hospitalsData = [
        {
            cityName: 'Hyderabad',
            specialty: 'Neurology',
            name: 'Aster Prime Hospital',
            detailsandlocation: 'https://g.co/kgs/d8JMz7i',
            contact: '040 4959 4959',
            doctors: ['Dr. Niloufer Ali', 'Dr. Anirudh Rao Deshmukh']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Neurology',
            name: 'Prasad Hospital',
            detailsandlocation: 'https://g.co/kgs/nmU7dzP', 
            contact: '040 2315 2315',
            doctors: ['DR. SREENIVAS', 'Dr. Niteesh Rao Madhavaram']
            
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Neurology',
            name: 'Citizens Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/Hr1ameQ',
            contact: ' 040 6719 1919',
            doctors: ['Dr Aparna Vijay Kumar', '']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Neurology',
            name: 'Srikara Hospital',
            detailsandlocation: 'https://g.co/kgs/L1y5FMJ',
            contact: ' 040 6600 0108',
            doctors: ['Dr. ARAVIND JALADI ', '']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Neurology',
            name: 'Continental Hospital',
            detailsandlocation: 'https://g.co/kgs/zYDtnJX',
            contact: ' 040 6700 0000',
            doctors: ['Dr Randhir Kumar', 'Dr A Ajay Reddy']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Cardiology',
            name: 'Apollo Hospital',
            detailsandlocation: 'https://g.co/kgs/Mdzn51p',
            contact: ' 040 2771 8888',
            doctors: ['Dr. Rajesh Reddy Chenna', 'Dr. Sudhir Kumar']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Cardiology',
            name: 'Care Hospital',
            detailsandlocation: 'https://g.co/kgs/WPE4oAX',
            contact: ' 040 6810 6589',
            doctors: ['Dr. Kishore Kumar', 'Dr. Mamindla Ravi Kumar']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Cardiology',
            name: 'Yashoda Hospital',
            detailsandlocation: 'https://g.co/kgs/fGEft25',
            contact: ' 040 4567 4567',
            doctors: ['Dr. A. Guru Prakash', 'Dr. B. Venkat Reddy']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Cardiology',
            name: 'Kamineni Hospital',
            detailsandlocation: 'https://g.co/kgs/ZyDQwuK',
            contact: ' 040 3987 9999',
            doctors: ['DR. M.R.M BABU', 'DR. SAGAR BHUYAR']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Cardiology',
            name: 'Medi Cover Hospital',
            detailsandlocation: 'https://g.co/kgs/Rnyb5dM',
            contact: ' 040 6833 4455',
            doctors: ['Dr Anil Krishna G', 'Dr Kumar Narayanan']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Pediatrics',
            name: 'Rainbow Children Hospital',
            detailsandlocation: 'https://g.co/kgs/zMZgVk9',
            contact: ' 080 3535 8317',
            doctors: ['Dr Anupama Y', 'Dr Nalinikanta Panigraphy']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Pediatrics',
            name: 'Little Stars and She',
            detailsandlocation: 'https://g.co/kgs/pu6HQyj',
            contact: '040 6699 2345',
            doctors: ['Dr. Satish Ghanta', 'Dr. Kishore Baske']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Pediatrics',
            name: 'Chinnari Children Hospital',
            detailsandlocation: 'https://g.co/kgs/oJQMa3b',
            contact: '040 2414 1794',
            doctors: ['Dr Arun Kumar P', '']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Pediatrics',
            name: 'Paramitha Childrens Hospital',
            detailsandlocation: 'https://g.co/kgs/5vkqUmK',
            contact: '040 4010 8108',
            doctors: ['Dr. Dhanraj', 'Dr. Srinivas Murki']
        },
        {
            cityName: 'Hyderabad',
            specialty: 'Pediatrics',
            name: 'Ankura Hospital for Women & Children',
            detailsandlocation: 'https://g.co/kgs/oinFgqM',
            contact: '090531 08108',
            doctors: ['Dr. Srinidhi', 'Dr. Sunil Mohan M']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Dental',
            name: 'The Dental Room',
            detailsandlocation: 'https://g.co/kgs/Vo1YwmX',
            contact: ' 081429 49594',
            doctors: ['Dr. Md Safiuddin Quraishi', 'Dr. Sana Fatima']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Dental',
            name: 'Adithri Dental & Maxillofacial Surgery Centre',
            detailsandlocation: 'https://g.co/kgs/krmLVs5',
            contact: '092463 65778',
            doctors: ['Dr. Haranadh Reddy M.R', 'Dr. Lavanya']
            
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Dental',
            name: 'KIMS Dental Care',
            detailsandlocation: 'https://g.co/kgs/uN4sxZR',
            contact: '096401 00600',
            doctors: ['Dr M Prasad', 'Dr Prathyusha Prasad']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Dental',
            name: 'VISTA DENTAL STUDIO',
            detailsandlocation: 'https://g.co/kgs/4Z91L3F',
            contact: ' 099663 14911',
            doctors: ['Dr. Nikhil Saran', 'Dr. Mani Deepika Palabatla']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Dental',
            name: 'Dantam | The Dental Lounge',
            detailsandlocation: 'https://g.co/kgs/yqCCsJx',
            contact: '099121 86174',
            doctors: ['Dr. Sneha Lakshmi Nagineni', 'Dr. Harsha Nagineni']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Orthopedics',
            name: 'Gleneagles Hospitals ',
            detailsandlocation: 'https://g.co/kgs/F9UVSGJ',
            contact: ' 074282 92787',
            doctors: ['Dr Naveen P. Reddy', '']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Orthopedics',
            name: 'Medi Cover Hospital',
            detailsandlocation: 'https://g.co/kgs/Rnyb5dM',
            contact: '040 6833 4455',
            doctors: ['Dr Praveen Sodavarapu', 'Dr Surya Prakash Rao V']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Orthopedics',
            name: 'Citizens Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/Hr1ameQ',
            contact: ' 040 6719 1919',
            doctors: ['Dr Ashok Raju Gottemukkala', 'Dr Praful Kilaru']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Orthopedics',
            name: 'Srikara Hospital',
            detailsandlocation: 'https://g.co/kgs/L1y5FMJ',
            contact: ' 040 6600 0108',
            doctors: ['DR.RAM KAMAL', 'DR.G Sudhakar Reddy']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Orthopedics',
            name: 'Continental Hospital',
            detailsandlocation: 'https://g.co/kgs/zYDtnJX',
            contact: '040 6700 0000',
            doctors: ['Dr Gowtham Chowdary Kankanala', 'Dr GK Sudhakar Reddy']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Pulmonology',
            name: 'Care Hospital',
            detailsandlocation: 'https://g.co/kgs/WPE4oAX',
            contact: ' 040 6810 6589',
            doctors: ['Dr. A Jayachandra', 'Dr. Damodar Bindhani']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Pulmonology',
            name: 'Yashoda Hospital',
            detailsandlocation: 'https://g.co/kgs/fGEft25',
            contact0: '040 4567 4567',
            doctors: ['Dr V Pratibh Prasad', 'Dr. Alekhya Lakkam']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Pulmonology',
            name: 'KIMS Hospital',
            detailsandlocation: 'https://g.co/kgs/Ds9EuLS',
            contact: ' 085238 20410',
            doctors: ['Dr. Latha Sharma', 'Dr. V. V. Ramana Prasad']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Pulmonology',
            name: 'Apollo Hospital',
            detailsandlocation: 'https://g.co/kgs/bdyPoE2',
            contact: ' 040 2360 7777',
            doctors: ['Dr. Pradyut Waghray', 'Dr. Qamar Hussain Ansari']
        }, 
        {
            cityName: 'Hyderabad',
            specialty: 'Pulmonology',
            name: 'Shenoy Hospital',
            detailsandlocation: 'https://g.co/kgs/uPDcVMA',
            contact: ' 040 4151 9999',
            doctors: ['Dr. Tapaswi Krishna', '']
        }, 
        {
            cityName: 'Kolkata',
            specialty: 'Neurology',
            name: 'Manipal Hospitals',
            detailsandlocation: 'https://g.co/kgs/rQ8f5aG',
            contact: ' 033 6680 0000',
            doctors: ['Dr. Apratim Chatterjee', 'Dr. Madhuparna Paul']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Neurology',
            name: 'Dr. Amitabha Chanda (Best Neurosurgeon)',
            detailsandlocation: 'https://g.co/kgs/EDZ5p3q',
            contact:  '086172 28860',
            doctors: ['DR. AMITABHA CHANDA', '']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Neurology',
            name: 'IRIS MULTISPECIALITY HOSPITAL',
            detailsandlocation: 'https://g.co/kgs/suAn5Dy',
            contact: ' 033 6609 6000',
            doctors: ['Dr. Amit Haldar', 'Dr. Asish Das']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Neurology',
            name: 'Apollo Multispeciality Hospital',
            detailsandlocation: 'https://g.co/kgs/atNuLJe',
            contact: ' 033 4420 2122',
            doctors: ['Dr Rupant K Das', '']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Neurology',
            name: 'Narayana Hospital - RN Tagore Hospital',
            detailsandlocation: 'https://g.co/kgs/ZEDQgFd',
            contact: ' 080675 06860',
            doctors: ['Dr. Amlan Mandal', 'Dr. Animesh Kar']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Cardiology',
            name: 'Medica Superspecialty Hospital',
            detailsandlocation: 'https://g.co/kgs/3wmMNZj',
            contact: ' 033 6652 0000',
            doctors: ['Dr. Kunal Sarkar', 'Dr. Anup Banerji']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Cardiology',
            name: 'Shuddhi Hiims (Kolkata) Ayurveda Clinic',
            detailsandlocation: 'https://g.co/kgs/gkF8MF1',
            contact: ' 087920 87920',
            doctors: ['Dr. Rupesh Raj ', '']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Cardiology',
            name: 'Goodace Hospital',
            detailsandlocation: 'https://g.co/kgs/QpBT93A',
            contact: ' 072770 64064',
        },
        {
            cityName: 'Kolkata',
            specialty: 'Cardiology',
            name: 'BM Birla Heart Hospital',
            detailsandlocation: 'https://g.co/kgs/aoxbP3Q',
            contact: ' 080 6213 6586',
            doctors: ['Dr. Anil Mishra', 'Dr. Anjan Siotia']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Cardiology',
            name: 'Manipal Hospital',
            detailsandlocation: 'https://g.co/kgs/mvzjpH9',
            contact: ' 1800 102 4647',
            doctors: ['Dr. Aditya Verma', 'Dr. Alok Mazumdar']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pediatrics',
            name: 'Dr. Apurba Ghosh',
            detailsandlocation: 'https://g.co/kgs/jzMvZWN',
            contact: '07947145774',
            doctors: ['Dr. Apurba Ghosh']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pediatrics',
            name: 'Dr. Parichaya Bera: Best child specialist',
            detailsandlocation: 'https://g.co/kgs/N548YMz',
            contact: ' 098747 00462',
            doctors: ['Dr. Parichaya Bera']
        },  {
            cityName: 'Kolkata',
            specialty: 'Pediatrics',
            name: 'IRIS MULTISPECIALITY HOSPITAL',
            detailsandlocation: 'https://g.co/kgs/suAn5Dy',
            contact: ' 033 6609 6000',
            doctors: ['Dr. Sabyasachi Bhattacharya', 'Dr. Rama Manna']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pediatrics',
            name: 'Manipal Hospitals',
            detailsandlocation: 'https://g.co/kgs/rQ8f5aG',
            contact: ' 033 6680 0000',
            doctors: ['Dr. Rajiv Sinha', 'Dr. Atanu Kumar Jana']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pediatrics',
            name: 'Dr. Arijita Chatterjee - Best Child Specialist',
            detailsandlocation: 'https://g.co/kgs/89s8zJo',
            contact: '040 61 62 63 64',
            doctors: ['Dr. Arijita Chatterjee', '']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Dental',
            name: 'Great Lakes Dental Clinic and Orthodontic Care',
            detailsandlocation: 'https://g.co/kgs/3Qepu5m',
            contact: ' 083370 98496',
            doctors: ['Dr.Abhisek Ghosh','Dr.Bhavna Ghosh']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Dental',
            name: 'Teeth Care Multispeciality Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/vCtio7i',
            contact: ' 062909 41883',
            doctors: ['Dr. Arimeeta Chakraverty', 'Dr. Jeet Singh']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Dental',
            name: 'Whitezone Dental clinic',
            detailsandlocation: 'https://g.co/kgs/hyGrSEN',
            contact: '098308 08221',
            doctors: ['Dr. Biswajit Panda', 'Dr. Krishnakali Chatterjee']
        },

        {
            cityName: 'Kolkata',
            specialty: 'Dental',
            name: 'Apollo Dental Clinics',
            detailsandlocation: 'https://g.co/kgs/RUDVFBG',
            contact: ' 1800 102 0288',
            doctors: ['Dr. Anirban Bhattacharyya']
        },

        {
            cityName: 'Kolkata',
            specialty: 'Dental',
            name: 'DentRelief Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/SKfS5Cm',
            contact: ' 094579 48362',
            doctors: ['Dr. Rakay Ahmed']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Orthopedics',
            name: 'Niramaya Jha Superspeciality Centre for Orthopaedics',
            detailsandlocation: 'https://g.co/kgs/gqXGDfo',
            contact: ' 082405 97589',
            doctors: [' Dr. Amrish Kumar Jha', 'Dr. Nandini Thakur Jha']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Orthopedics',
            name: 'JBCH (Joint & Bone Care Hospital)',
            detailsandlocation: 'https://g.co/kgs/admLNCx',
            contact: ' 033 4601 8095',
            doctors: ['Dr Abhishek NK Saha', 'Dr Abhishek Nandi']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Orthopedics',
            name: 'Dr Anindansu Basu',
            detailsandlocation: 'https://g.co/kgs/G2n3C5P',
            contact: '094772 02020',
            doctors: ['Dr. Anindansu Basu']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Orthopedics',
            name: 'Dr Soham Mandal ',
            detailsandlocation: 'https://g.co/kgs/zDWfsfR',
            contact: '098301 34820',
            doctors: ['Dr Soham Mandal']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Orthopedics',
            name: 'Bhattacharyya Orthopaedics & Related Research Centre ',
            detailsandlocation: 'https://g.co/kgs/D3s9kRX',
            contact: ' 033 2519 6220',
            doctors: ['DR. SUKHENDU SARKHEL', 'DR. SOURAV DAS D.']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pulmonology',
            name: 'Dr. Soumya Das',
            detailsandlocation: 'https://g.co/kgs/rrf5BF6',
            contact: ' 1800 102 4647',
            doctors: ['Dr. Soumya Das']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pulmonology',
            name: 'ILS Hospitals',
            detailsandlocation: 'https://g.co/kgs/rifzuzJ',
            contact: ' 033 4020 6500',
            doctors: ['Dr. V. S. Baid']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pulmonology',
            name: 'Binayak Multi-specialty Hospital',
            detailsandlocation: 'https://g.co/kgs/BoNntE1',
            contact: '03366760141',
            doctors: ['Dr. Anirban Sarkar', 'Dr. Biswajit Banerjee']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pulmonology',
            name: 'Zenith Super Specialist Hospital',
            detailsandlocation: 'https://g.co/kgs/CpfJZqm',
            contact: ' 033 4949 9200',
            doctors: ['Dr.Anirban Sarkar', 'Dr.Kaushik Saha']
        },
        {
            cityName: 'Kolkata',
            specialty: 'Pulmonology',
            name: 'Suraksha Diagnostics',
            detailsandlocation: 'https://g.co/kgs/5c9FWZg',
            contact: '033 6619 1000',
            doctors: ['Dr. Kaushik Ghosh', 'Dr. Subrata Maulik']
        },
        {
            cityName: 'Pune',
            specialty: 'Neurology',
            name: 'Aditya Birla Hospital',
            detailsandlocation: 'https://g.co/kgs/R457JRm',
            contact: ' 020 3071 7610',
            doctors: ['Dr. Paras Rohidas Borse', 'Dr. Bhushan Mishal']
        },
        {
            cityName: 'Pune',
            specialty: 'Neurology',
            name: 'VishwaRaj Hospital',
            detailsandlocation: 'https://g.co/kgs/MbUX7uY',
            contact: '020 6760 6060',
            doctors: ['Dr. Vilas Changdev Shingare', 'Dr. Mahabal Suresh Shah']
        },

        {
            cityName: 'Pune',
            specialty: 'Neurology',
            name: 'JEEWAN JYOT HOSPITAL, KHARADI',
            detailsandlocation: 'https://g.co/kgs/RbGn72y',
            contact: '02248977837',
            doctors: ['Dr. Amit Sakaria']
        },


        {
            cityName: 'Pune',
            specialty: 'Neurology',
            name: 'Medicover Hospitals',
            detailsandlocation: 'https://g.co/kgs/TrURkVZ',
            contact: '040 6833 4455',
            doctors: ['Dr Dhanashree Peddawad']
        },

        {
            cityName: 'Pune',
            specialty: 'Neurology',
            name: 'Jehangir Hospital',
            detailsandlocation : 'https://g.co/kgs/YbHj7i3',
            contact: '020 6681 9999',
            doctors: ['Dr Anand Alurkar', 'Dr Dilip Kiyawat']
        },
        
        {
            cityName: 'Pune',
            specialty: 'Cardiology',
            name: 'Jupiter Hospital',
            detailsandlocation: 'https://g.co/kgs/miYheZK',
            contact: ' 020 2799 2799',
            doctors: ['Dr. Gautam Rege', 'Dr. Jayesh Dhareshwar']
        },
        {
            cityName: 'Pune',
            specialty: 'Cardiology',
            name: 'Noble Hospitals & Research Centre',
            detailsandlocation: 'https://g.co/kgs/pcXtPz6',
            contact: '080070 06611',
            doctors: ['Dr Sujit S Sawadatkar', 'Dr. Prasad Shah']
        },
        {
            cityName: 'Pune',
            specialty: 'Cardiology',
            name: 'Manipal Hospital, Kharadi',
            detailsandlocation: 'https://g.co/kgs/kTz49C4',
            contact: ' 020 6165 6666',
            doctors: ['Dr. Pramod Bhanudas Narkhede', 'Dr. Tanmai Yermal']
        },
        {
            cityName: 'Pune',
            specialty: 'Cardiology',
            name: 'N. M. Wadia Heart Hospital',
            detailsandlocation: 'https://g.co/kgs/hCLJaXk',
            contact: ' 020 6763 6400',
            doctors: ['DR. A.D. KATDARE', 'DR. NAUTEJ SINGH']
        },
        {
            cityName: 'Pune',
            specialty: 'Cardiology',
            name: 'Deenanath Mangeshkar Hospital and Research Center',
            detailsandlocation: 'https://g.co/kgs/XWfdUQL',
            contact: ' 020 4015 1000',
            doctors: ['Dr. DHOPESHWARKAR RAJESH', 'Dr. GADRE ANIKET A.']
        },
        {
            cityName: 'Pune',
            specialty: 'Pediatrics',
            name: 'Medipoint Hospital ',
            detailsandlocation: 'https://g.co/kgs/kPs1mLC',
            contact: ' 098506 22422',
            doctors: ['Dr. Vinod Shelar', 'Dr.Rupesh G Kulwal']
        },
        {
            cityName: 'Pune',
            specialty: 'Pediatrics',
            name: 'Surya Mother And Child Super Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/LhnA18k',
            contact: ' 020 6791 5400',
            doctors: ['Dr. Adarsh Hegde', 'Dr. Ajay Narayan Sharma']
        },
        {
            cityName: 'Pune',
            specialty: 'Pediatrics',
            name: 'Jehangir Hospital',
            detailsandlocation: 'https://g.co/kgs/YbHj7i3',
            contact: ' 020 6681 9999',
            doctors: ['Dr Aarti Nilesh Kamat', 'Dr Abhijeet Botre']
        },
        {
            cityName: 'Pune',
            specialty: 'Pediatrics',
            name: 'KEM Hospital',
            detailsandlocation: 'https://g.co/kgs/MY3tjEj',
            contact: '020 6603 7300',
            doctors: ['Dr. Farokh J']
        },
        {
            cityName: 'Pune',
            specialty: 'Pediatrics',
            name: 'Aditya Birla Hospital',
            detailsandlocation: 'https://g.co/kgs/qM4vReY',
            contact: ' 020 3071 7610',
            doctors: ['Dr. Sandip Purshottam Bartakke', 'Dr. Hemant Prakash Palkar']
        },
        {
            cityName: 'Pune',
            specialty: 'Dental',
            name: 'Dr Ratnikas - Smile Up Dental Clinic & Implant Center ',
            detailsandlocation: 'https://g.co/kgs/UoS6oab',
            contact: '082377 20741',
            doctors: ['Dr. Amol Thorat Dinkar', 'Dr. Ratnika Agarwal']
        },
        {
            cityName: 'Pune',
            specialty: 'Dental',
            name: '32 smiles',
            detailsandlocation: 'https://g.co/kgs/kpKxatd',
            contact: '070586 75095',
            doctors: ['Dr. Praveen M', 'Dr. M Pallavi']
        },
        {
            cityName: 'Pune',
            specialty: 'Dental',
            name: 'Prateek Dental Care & Implant Centre',
            detailsandlocation: 'https://g.co/kgs/TFq34fa',
            contact: '072298 32893',
            doctors: ['Dr. Prateek Jain']
        },
        {
            cityName: 'Pune',
            specialty: 'Dental',
            name: 'smile planet dental clinic',
            detailsandlocation: 'https://g.co/kgs/JSkSKB9',
            contact: '089996 63411',
            doctors: ['Dr. shrinivas panchal']
        },
        {
            cityName: 'Pune',
            specialty: 'Dental',
            name: 'Children Dental clinic Dr Pranil Survashe',
            detailsandlocation: 'https://g.co/kgs/BnEqu9q',
            contact: '095610 58197',
            doctors: ['Dr. Pranil Survashe']
        },
        {
            cityName: 'Pune',
            specialty:'Orthopedics',
            name: 'Medicover Hospitals',
            detailsandlocation: 'https://g.co/kgs/vGczEgT',
            contact: ' 040 6833 4455',
            doctors: ['Dr Shrirang Kulkarni', 'Dr Rahul D Gagare']
        },
        {
            cityName: 'Pune',
            specialty:'Orthopedics',
            name: 'ASTHA HOSPITAL',
            detailsandlocation: 'https://g.co/kgs/7U1o2ZQ',
            contact: ' 080870 02110',
            doctors: ['Dr. E. Ramanjaneyulu']
        },
       
        {
            cityName: 'Pune',
            specialty:'Orthopedics',
            name: 'Universal Hospital ',
            detailsandlocation: 'https://g.co/kgs/4u1d4xK',
            contact: ' 095111 11222',
            doctors: ['Dr. Anant Bagul']
        },
       
        {
            cityName: 'Pune',
            specialty:'Orthopedics',
            name: 'Kapare Hospital',
            detailsandlocation: 'https://g.co/kgs/Y1EjoSi',
            contact: '080 4369 4606',
            doctors: ['Dr. Prashant Kapare']
        },
       
        {
            cityName: 'Pune',
            specialty:'Orthopedics',
            name: 'Dr Karne Accident Hospital and Orthopedics',
            detailsandlocation: 'https://g.co/kgs/bMp9bCA',
            contact: '020 2426 4213',
            doctors: ['Dr. Vivekanand Patole', 'Dr. Narayan J. Karne']
        },
        {
            cityName: 'Pune',
            specialty:'Pulmonology',
            name: 'Sahyadri Super Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/Aj8KgGV',
            contact: ' 088888 22222',
            doctors: ['Dr. Pankaj Magar']
        },
        {
            cityName: 'Pune',
            specialty:'Pulmonology',
            name: 'Ruby Hall Clinic',
            detailsandlocation: 'https://g.co/kgs/KCRhq1C',
            contact: ' 020 6645 5100',
            doctors: ['Dr. R.K.Chopra', 'Dr. Sneha Tirpude']
        },
        {
            cityName: 'Pune',
            specialty:'Pulmonology',
            name: 'KEM Hospital',
            detailsandlocation: 'https://g.co/kgs/imohPeX',
            contact: '020 6603 7300',
            doctors: ['Dr. Parag Khatavkar', 'Dr. Swapnil Kulkarni']
        },
        {
            cityName: 'Pune',
            specialty:'Pulmonology',
            name: 'Aditya Birla Memorial Hospital',
            detailsandlocation: 'https://g.co/kgs/dF93Ct2',
            contact: '098811 23006',
            doctors: ['Dr. Yogesh Agrawal', 'Dr. Anand Vijay']
        },
        {
            cityName: 'Pune',
            specialty:'Pulmonology',
            name: 'Bharati Hospital',
            detailsandlocation: 'https://g.co/kgs/7YZEfJX',
            contact: '020 4055 5555',
            doctors: ['Dr. Kulkarni Ajit', 'Dr. Laxmikant Kaotekwar']
        },
        {
            cityName: 'Benguluru',
            specialty:'Neurology',
            name: 'Narayana Health City',
            detailsandlocation: 'https://g.co/kgs/eMeo2jG',
            contact: '080 6215 4298',
            doctors: ['Dr. Advait Kulkarni', 'Dr. Anush Rangarajan S']
        },

        {
            cityName: 'Benguluru',
            specialty:'Neurology',
            name: 'Manipal Hospital',
            detailsandlocation: 'https://g.co/kgs/QcUXFhh',
            contact: '1800 102 5555',
            doctors: ['Dr. A.K. Roy', 'Dr. Vidyadhara S.']
        },

        {
            cityName: 'Benguluru',
            specialty:'Neurology',
            name: 'Fortis Hospital',
            detailsandlocation: 'https://g.co/kgs/y11vEfg',
            contact: '088844 81414',
            doctors: ['Dr. Kameshwar Prasad', 'Dr. Praveen Gupta']
        },

        {
            cityName: 'Benguluru',
            specialty:'Neurology',
            name: 'Gleneagles BGS Hospital',
            detailsandlocation: 'https://g.co/kgs/Xv5xMfv',
            contact: ' 085273 06331',
            doctors: ['Dr Naveen M A']
        },

        {
            cityName: 'Benguluru',
            specialty:'Neurology',
            name: 'Apollo Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/Sr76z8g',
            contact: ' 080 4612 4444',
            doctors: ['Dr. Satish Satyanarayana', 'Dr. B A Chandramouli']
        },
        {
            cityName: 'Benguluru',
            specialty:'Cardiology',
            name: 'Narayana Institute of Cardiac Sciences',
            detailsandlocation: 'https://g.co/kgs/HmJD9or',
            contact: ' 1800 309 0309',
            doctors: ['Ashalatha B', 'Dr. Aditi Singhvi']
        },
        {
            cityName: 'Benguluru',
            specialty:'Cardiology',
            name: 'Ramaiah Narayana Heart Centre',
            detailsandlocation: 'https://g.co/kgs/ktrZvXN',
            contact: '080675 06857',
            doctors: ['Dr. Vinay Kumar Bahl', 'Dr. Prakash V S']
        },
        {
            cityName: 'Benguluru',
            specialty:'Cardiology',
            name: 'Fortis Hospital',
            detailsandlocation: 'https://g.co/kgs/iGRcXJD',
            contact: ' 096868 60310',
            doctors: ['Dr. Gopi A', 'Dr. Sridhara N']
        },
        {
            cityName: 'Benguluru',
            specialty:'Cardiology',
            name: 'The Heart Hospital',
            detailsandlocation: 'https://g.co/kgs/9kvjceZ',
            contact: ' 080 4601 1999',
            doctors: ['Dr.Mahadev Swamy']
        },
        {
            cityName: 'Benguluru',
            specialty:'Cardiology',
            name: 'VR Revankar Hospital ',
            detailsandlocation: 'https://g.co/kgs/wrErucy',
            contact: ' 081231 89099',
            doctors: ['Dr. VINOD REVANKAR']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pediatrics',
            name: 'Rainbow Children Hospitals',
            detailsandlocation: 'https://g.co/kgs/kJAVvuW',
            contact: ' 080 3783 6516',
            doctors: ['Dr. ARVIND SHENOI', 'Dr. ANTONY ROBERT C']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pediatrics',
            name: 'Shishuka Children Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/7irdc2Q',
            contact: '080 4370 6940',
            doctors: ['Dr. Nagarjun', 'Dr. Ravikiran CS']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pediatrics',
            name: 'Chethana Super Speciality Child Clinic',
            detailsandlocation: 'https://g.co/kgs/nAxRWbz',
            contact: '088926 89120',
            doctors: ['Dr.Nandeesh B']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pediatrics',
            name: 'SPARSH Hospital for Women & Children',
            detailsandlocation: 'https://g.co/kgs/Kja3Xiv',
            contact: ' 080 6122 2000',
            doctors: ['Dr. Jeevak Shetty', 'Dr. Mohammed Abrar Shariff']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pediatrics',
            name: 'Kangaroo Care - Women and Children Hospital',
            detailsandlocation: 'https://g.co/kgs/joJ2Vwc',
            contact: '1800 425 4500',
            doctors: ['Dr. Ramapriya K S', 'Dr. Javgal S Suraj']
        },
        {
            cityName: 'Benguluru',
            specialty:'Dental',
            name: 'Jeevan Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/MpFS8pH',
            contact: '098868 92438',
            doctors: ['Dr. George Jeevan', 'Dr. Anju Jeevan']
        },
        {
            cityName: 'Benguluru',
            specialty:'Dental',
            name: 'DENT-O-CARE MULTISPECIALITY DENTAL CLINIC',
            detailsandlocation: 'https://g.co/kgs/3bri4hT',
            contact: ' 096636 61131',
            doctors: ['Dr. Josin V Jose', 'Dr. Neethu Raj']
        },
        {
            cityName: 'Benguluru',
            specialty:'Dental',
            name: 'Bangalore Dental & General Polyclinic',
            detailsandlocation: 'https://g.co/kgs/2wz6S67',
            contact: '098211 44764',
            doctors: ['Dr. Akshim Sukhraj Lalchandani']
        },
        {
            cityName: 'Benguluru',
            specialty:'Dental',
            name: 'Dental Solutions',
            detailsandlocation: 'https://g.co/kgs/SKHqwfZ',
            contact: '080 4110 0376',
            doctors: ['Dr. Ramya', 'Dr. Balasubramanya K V']
        },
        {
            cityName: 'Benguluru',
            specialty:'Dental',
            name: 'Dent Essence Pro Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/erVem8K',
            contact: ' 097425 03814',
            doctors: [' Dr. Sowmya Gangaiah', ' Dr. Makam Gangaiah']
        },
        {
            cityName: 'Benguluru',
            specialty:'Orthopedics',
            name: 'Sathya Sai Orthopaedic & Multispeciality Hospital',
            detailsandlocation: 'https://g.co/kgs/9iCu3KV',
            contact: ' 070226 49111',
            doctors: ['Dr. Mahesh M N', 'Dr. Vijay M']
        },
        {
            cityName: 'Benguluru',
            specialty:'Orthopedics',
            name: 'Sun Orthopaedic Hospital',
            detailsandlocation: 'https://g.co/kgs/p7g2NdL',
            contact: ' 097380 75973',
            doctors: ['Dr. Dharmapal G. K.']
        },
        {
            cityName: 'Benguluru',
            specialty:'Orthopedics',
            name: 'Bangalore Orthopaedic And Surgical Hospital',
            detailsandlocation: 'https://g.co/kgs/MakRZkS',
            contact: '080 4633 3444',
            doctors: ['Dr. K K Subbaiah', 'Dr. Sathya Vamsi Krishna']
        },
        {
            cityName: 'Benguluru',
            specialty:'Orthopedics',
            name: 'Dr Poornesh Gowda Elite Ortho',
            detailsandlocation: 'https://g.co/kgs/odXtzkf',
            contact: ' 073386 04777',
            doctors: ['Dr. Poornesh Gowda MS']
        },
        {
            cityName: 'Benguluru',
            specialty:'Orthopedics',
            name: 'Best Ortho Care',
            detailsandlocation: 'https://g.co/kgs/eghpseg',
            contact: ' 097421 67776',
            doctors: ['Dr. Kiran Chowka']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pulmonology',
            name: 'Bangalore Institute of Respiratory Diseases and Sleep Disorders ',
            detailsandlocation: 'https://g.co/kgs/pJFxVLY',
            contact: ' 093539 17508',
        },
        {
            cityName: 'Benguluru',
            specialty:'Pulmonology',
            name: 'SJ The Lung Care',
            detailsandlocation: 'https://g.co/kgs/5pbqf22',
            contact: ' 079752 42178',
            doctors: ['Dr. Bhavya Shivalingaiah']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pulmonology',
            name: 'Agastya Chest Center',
            detailsandlocation: 'https://g.co/kgs/oF4fL7M',
            contact: ' 088848 18999',
            doctors: ['Dr. Sri Shivaraj Kumar K V']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pulmonology',
            name: 'Dr Vasunethra Kasargod',
            detailsandlocation: 'https://g.co/kgs/UDf6WDu',
            contact: ' 097425 32343',
            doctors: ['Dr. Vasunethra Kasargod']
        },
        {
            cityName: 'Benguluru',
            specialty:'Pulmonology',
            name: 'Rubix Lung Care Clinic ',
            detailsandlocation: 'https://g.co/kgs/VtWt7gr',
            contact: ' 081472 21622',
            doctors: ['Dr. Rohan R Naick']
        },
        {
            cityName: 'Mumbai',
            specialty:'Neurology',
            name: 'Best Neurology Hospital in Mumbai ',
            detailsandlocation: 'https://g.co/kgs/XKd9628',
            contact: ' 022 6884 6143',
            doctors: ['Dr. Gurneet Singh Sawhney']
        },
        {
            cityName: 'Mumbai',
            specialty:'Neurology',
            name: 'S.L Raheja Hospital',
            detailsandlocation: 'https://g.co/kgs/xNfiprj',
            contact: '022 6884 6143',
            doctors: ['Dr. Ajit Mishra', 'Dr. Batuk Diyora']
        },
        {
            cityName: 'Mumbai',
            specialty:'Neurology',
            name: 'Mohinish G Bhatjiwale',
            detailsandlocation: 'https://g.co/kgs/GnDQ5nq',
            contact: ' 098207 11369',
            doctors: ['Dr. Mohinish Bhatjiwale']
            
        },
        {
            cityName: 'Mumbai',
            specialty:'Neurology',
            name: 'Department of Neurosurgery',
            detailsandlocation: 'https://g.co/kgs/zkHwTqL',
            contact: ' 18001805522',
            doctors: ['Dr. Pallavi Supriya Prabhakar Saple']
        },
        {
            cityName: 'Mumbai',
            specialty:'Neurology',
            name: 'Dr. Sachin Adukia',
            detailsandlocation: 'https://g.co/kgs/N37k7Hc',
            contact: '097426 25678',
            doctors: ['Dr. Adukia Sachin Ajitkumar']
        },
        {
            cityName: 'Mumbai',
            specialty:'Cardiology',
            name: 'ACE Heart Hospital',
            detailsandlocation: 'https://g.co/kgs/59N2hZG',
            contact: ' 089285 95323',
            doctors: ['Dr. Puneet K. Verma', 'Dr. Rahul Katyal']
        },
        {
            cityName: 'Mumbai',
            specialty:'Cardiology',
            name: 'Asian Heart Institute',
            detailsandlocation: 'https://g.co/kgs/5r26E3Q',
            contact: '022 6698 6666',
            doctors: ['Dr. Santosh Kumar Dora', 'Dr. Tilak Suvarna']
        },

        {
            cityName: 'Mumbai',
            specialty:'Cardiology',
            name: 'Smt S R Mehta & Sir K P Cardiac Institute',
            detailsandlocation: 'https://g.co/kgs/4ePJhDb',
            contact: ' 022 6910 5400',
            doctors: ['Dr. Jagdish Parikh', 'Dr. D. F. Daruwala']
        },

        {
            cityName: 'Mumbai',
            specialty:'Cardiology',
            name: 'Rane Hospital & Mumbai Heart Clinic',
            detailsandlocation: 'https://g.co/kgs/aCoJEA2',
            contact: ' 022 3513 0080',
            doctors: ['Dr. Sandip Rane', 'Dr. Mukesh Parikh']
        },

        {
            cityName: 'Mumbai',
            specialty:'Cardiology',
            name: 'Aaradhya Health Care Super Speciality Hospital ',
            detailsandlocation: 'https://g.co/kgs/6E3TqKe',
            contact: ' 022 6900 0000',
            doctors: ['Dr. Harish Bajaj']
        },
        
        {
            cityName: 'Mumbai',
            specialty:'Pediatrics',
            name: 'Narayana Health SRCC Children Hospital',
            detailsandlocation: 'https://g.co/kgs/9wToLZ1',
            contact: ' 080 6222 8531',
            doctors: ['Dr Chintan Vyas', 'Dr Vaishali More']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pediatrics',
            name: 'Dr Agarwal Children Hospital',
            detailsandlocation: 'https://g.co/kgs/jurcwGT',
            contact: '093729 33902',
            doctors: ['Dr. Bharat Radhakishan Agarwal']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pediatrics',
            name: 'Sparsh Children Hospital',
            detailsandlocation: 'https://g.co/kgs/xiy2vDv',
            contact: ' 022 2415 1201',
            doctors: ['Dr. Suresh Shah', 'Dr. Irphan Ali']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pediatrics',
            name: 'CuddlesNCare Pediatric Hospital and NICU',
            detailsandlocation: 'https://g.co/kgs/NhgTCig',
            contact: ' 098671 85053',
            doctors: ['Dr. Ashwin Bhanushali', 'Dr. Pranav Sanghavi']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pediatrics',
            name: 'Surya Hospitals',
            detailsandlocation: 'https://g.co/kgs/XxGeq1y',
            contact: '088288 28100',
            doctors: ['Dr. Adarsh Hegde', 'Dr. Akash Sharma']
        },
        {
            cityName: 'Mumbai',
            specialty:'Dental',
            name: 'Smile Dental Hospital',
            detailsandlocation: 'https://g.co/kgs/qs3UEKV',
            contact: '072087 17699',
            doctors: ['Dr. Sagar D. Barkade']
        },
        {
            cityName: 'Mumbai',
            specialty:'Dental',
            name: 'Dentzz Dental',
            detailsandlocation: 'https://g.co/kgs/jmfgoYy',
            contact: ' 098199 16333',
            doctors: ['Dr Sukhpreet']
            
        },
        {
            cityName: 'Mumbai',
            specialty:'Dental',
            name: 'Neevwellbeings THE DENTAL CLINIC',
            detailsandlocation: 'https://g.co/kgs/uh8mTz8',
            contact: ' 098701 85758',
            doctors: ['Dr. Dhruvin Gharia', 'Dr Prerna Karde']
        },
        {
            cityName: 'Mumbai',
            specialty:'Dental',
            name: 'Smiling Mumbai Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/p29XKEd',
            contact: '093200 77400',
            doctors: ['Dr. Sidharth Haritwal', 'Dr. Ritika Arora']
        },
        {
            cityName: 'Mumbai',
            specialty:'Dental',
            name: 'Smile N Shine Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/DV6KGdx',
            contact: ' 097689 12435',
            doctors: ['Dr. Shravan Kumar K', 'Dr. Raju Singam Shetty']
        },
        {
            cityName: 'Mumbai',
            specialty:'Orthopedics',
            name: 'Dr. Tushar Rathod MS Ortho',
            detailsandlocation: 'https://g.co/kgs/LNMvDUP',
            contact: '097632 23239',
            doctors: ['Dr. Tushar Rathod']
        },
        {
            cityName: 'Mumbai',
            specialty:'Orthopedics',
            name: 'Sharan Hospital',
            detailsandlocation: 'https://g.co/kgs/q1LyrKe',
            contact: '072081 77213',
            doctors: ['Dr. Neeraja Karnakota']
        },
        {
            cityName: 'Mumbai',
            specialty:'Orthopedics',
            name: 'Dr. Tejas Upasani',
            detailsandlocation: 'https://g.co/kgs/aveJzDu',
            contact: '022 6881 4200',
            doctors: ['Dr. Tejas Upasani']
        },
        {
            cityName: 'Mumbai',
            specialty:'Orthopedics',
            name: 'Rahul Rane',
            detailsandlocation: 'https://g.co/kgs/Pw9pWMq',
            contact: '098330 11340',
            doctors: ['Dr. Rahul Rane ']
        },
        {
            cityName: 'Mumbai',
            specialty:'Orthopedics',
            name: 'RegenOrthoSport Orthopedic Hospital',
            detailsandlocation: 'https://g.co/kgs/ZLnXHuH',
            contact: ' 080089 11820',
            doctors: ['Dr. Venkatesh Movva', 'Dr. Anand Alluru']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pulmonology',
            name: 'Apollo hospital',
            detailsandlocation: 'https://www.apollohospitals.com/',
            contact: '+8401801066',
            doctors: ['Dr A R Gayathri Devi', 'Dr Abhishek Verma']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pulmonology',
            name: 'Lilavati Hospital And Research Centre',
            detailsandlocation: 'https://g.co/kgs/YYn6Pb6',
            contact: '86579 07751',
            doctors: ['Dr. Aaditya Nanavati', 'Dr. Abha Mahashur']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pulmonology',
            name: 'Fortis Hospital ',
            detailsandlocation: 'https://g.co/kgs/YvAYLg7',
            contact: '+91-124 492 1041',
            doctors: ['Dr. Anita Mathew', 'Dr. Atul Limaye']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pulmonology',
            name: 'Hira Mongi Navneet Hospital',
            detailsandlocation: 'https://g.co/kgs/CvsxTUd',
            contact: '022 3504 3504',
            doctors: ['Dr Sundeepa Sawant', 'Dr Preetam Baban Kalaskar']
        },
        {
            cityName: 'Mumbai',
            specialty:'Pulmonology',
            name: 'Breach Candy Hospital Trust',
            detailsandlocation: 'https://g.co/kgs/dSRnXiR',
            contact: '022 - 62597788',
            doctors: ['Dr.Alka Ram Halbe', 'Dr. Aadil S. Chagla']
        },
        {
            cityName: 'Chennai',
            specialty:'Neurology',
            name: 'Brain and Spine Hospital',
            detailsandlocation: 'https://g.co/kgs/A1261Pf',
            contact: ' 1800 103 5246  ',
            doctors: ['Dr. M. Balamurugan', 'Dr. K. Chandrasekar']
        },
        {
            cityName: 'Chennai',
            specialty:'Neurology',
            name: 'Prashanth Super Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/1FRooxt',
            contact: '93 8099 8099',
            doctors: ['DR.Vishwanathan Krishnaswamy', 'Dr. Krishna Kumar']
        },

        {
            cityName: 'Chennai',
            specialty:'Neurology',
            name: 'Vanchilingam Advanced Neurology and Stroke Hospital',
            detailsandlocation: 'https://g.co/kgs/7EbLHkH',
            contact: '+91 7337556006',
            doctors: ['Dr. Somesh Vanchilingam', 'Dr. Arul A. S. Babu']
        },

        {
            cityName: 'Chennai',
            specialty:'Neurology',
            name: 'Dr Sathish Neuro Centre',
            detailsandlocation: 'https://g.co/kgs/7v5gb22',
            contact: '08105650784',
            doctors: ['Dr. K Sateesh Kumar']
        },

        {
            cityName: 'Chennai',
            specialty:'Neurology',
            name: 'VS Hospitals',
            detailsandlocation: 'https://g.co/kgs/gjRC1wf',
            contact: '+91-9962 242 000',
            doctors: ['Prof. Dr. S. Subramanian', 'Mrs. Vasantha Subramanian']
        },
        {
            cityName: 'Chennai',
            specialty:'Cardiology',
            name: 'Namar Heart Hospital',
            detailsandlocation: 'https://g.co/kgs/XAMMWb1',
            contact: '+91 90030 49004',
            doctors: ['Dr Prashant Shah', 'Dr. Harun Ramasami']
        },
        {
            cityName: 'Chennai',
            specialty:'Cardiology',
            name: 'Medway Heart Institute',
            detailsandlocation: 'https://g.co/kgs/aMdv9xU',
            contact: '044 2372 2372',
            doctors: ['Prof.Dr. G. Gnanavelu', 'Dr. K.Jaishankar']
        },
        {
            cityName: 'Chennai',
            specialty:'Cardiology',
            name: 'Chennai Cardiac Care',
            detailsandlocation: 'https://g.co/kgs/MA88Dht',
            contact: '+91 9962699922',
            doctors: ['Dr. Vinod Kumar', 'Dr. Sindhu M.D']
        },
        {
            cityName: 'Chennai',
            specialty:'Cardiology',
            name: 'SIMS Hospitals',
            detailsandlocation: 'https://g.co/kgs/wQtZZov',
            contact: '91 44 2000 2001',
            doctors: ['Dr. Muthu Veeramani', 'Dr. V V Bashi']
        },
        {
            cityName: 'Chennai',
            specialty:'Cardiology',
            name: 'Sidharam Multi Speciality Clinic',
            detailsandlocation: 'https://g.co/kgs/fKYb5kk',
            contact: '07942695490',
            doctors: ['Dr. Dhamodaran K ']
        },
        {
            cityName: 'Chennai',
            specialty:'Pediatrics',
            name: 'Apollo Childrens Hospital',
            detailsandlocation: 'https://g.co/kgs/B2Yz9fK',
            contact: ' 040-23607777',
            doctors: ['Dr Amol Gupta']
        },
        {
            cityName: 'Chennai',
            specialty:'Pediatrics',
            name: 'Rainbow Childrens Hospital',
            detailsandlocation: 'https://g.co/kgs/a7cP3Sm',
            contact: '08037836523',
            doctors: ['Dr. RAHUL ANAND YADAV', 'Dr. MATHANGI RAJAGOPALAN']
        },
        {
            cityName: 'Chennai',
            specialty:'Pediatrics',
            name: 'Kanchi Kamakoti CHILDS Trust Hospital',
            detailsandlocation: 'https://g.co/kgs/CCuSuup',
            contact: '+91 44 4200 1800',
            doctors: ['Dr. JANANI SANKAR', 'DR. LALITHA JANAKIRAMAN']
        },
        {
            cityName: 'Chennai',
            specialty:'Pediatrics',
            name: 'Kid-E-Care Clinic',
            detailsandlocation: 'https://g.co/kgs/NqLnST1',
            contact: '04446312566',
            doctors: ['Dr. V.Anjali']
        },
        {
            cityName: 'Chennai',
            specialty:'Pediatrics',
            name: 'Russel Children Hospital',
            detailsandlocation: 'https://g.co/kgs/vERZJvZ',
            contact: '(+91) 97871 76165',
            doctors: ['Dr. Arulraj Russelian ']
        },
        {
            cityName: 'Chennai',
            specialty:'Dental',
            name: 'RR Dental Hospital',
            detailsandlocation: 'https://g.co/kgs/u7tAz6p',
            contact: '07942679960',
        },
        {
            cityName: 'Chennai',
            specialty:'Dental',
            name: 'Malligai Dental Hospital',
            detailsandlocation: 'https://g.co/kgs/4Yjve8S',
            contact: '8015022207',
            doctors: ['Major Dr Pravin Prathip J ']
        },
        {
            cityName: 'Chennai',
            specialty:'Dental',
            name: 'Yuva Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/4NsryfX',
            contact: '081100 81133',
        },
        {
            cityName: 'Chennai',
            specialty:'Dental',
            name: 'Gloss Dental Multispeciality ',
            detailsandlocation: 'https://g.co/kgs/AUqBrsh',
            contact: '+91-9000114232',
        },
        {
            cityName: 'Chennai',
            specialty:'Dental',
            name: 'Chennai Dental Centre',
            detailsandlocation: 'https://g.co/kgs/4EYyNwg',
            contact: '+919381070890',
            doctors: ['Prof Dr.D.P.Uma Magesh']
        },
        {
            cityName: 'Chennai',
            specialty:'Orthopedics',
            name: 'Soundarapandian Bone and Joint Hospital',
            detailsandlocation: 'https://g.co/kgs/ajQxhEu',
            contact: '044-4206 6667.',
        },
        {
            cityName: 'Chennai',
            specialty:'Orthopedics',
            name: 'Dr. Lenins Orthoinde Hospital',
            detailsandlocation: 'https://g.co/kgs/KLn4gkm',
            contact: '044-49519008',
            doctors: ['Dr. Lenin']
        },
        {
            cityName: 'Chennai',
            specialty:'Orthopedics',
            name: 'Dr Kannirajs Magna Ortho Clinic',
            detailsandlocation: 'https://g.co/kgs/13BqmUr',
            contact: '911142246365',
            doctors: ['Dr. Kanniraj Marimuthu']
        },
        {
            cityName: 'Chennai',
            specialty:'Orthopedics',
            name: 'Chennai Orthopedic Center',
            detailsandlocation: 'https://g.co/kgs/u48NiVJ',
            contact: '044 2486 1660',
            doctors: ['Dr.Saravanan', 'Dr.KrishnaKumar']
        },
        {
            cityName: 'Chennai',
            specialty:'Orthopedics',
            name: 'Orthomed Hospital',
            detailsandlocation: 'https://g.co/kgs/i2CtCuY',
            contact: '+91 99400 99992',
            doctors: ['Dr. A. Subair Khan']
        },
        {
            cityName: 'Chennai',
            specialty:'Pulmonology',
            name: 'Kalyani Speciality Lung Clinic',
            detailsandlocation: 'https://g.co/kgs/zrfy4dJ',
            contact: '04446276052',
            doctors: ['Dr. Agila Saravanan']
        },
        {
            cityName: 'Chennai',
            specialty:'Pulmonology',
            name: 'Sabari Lung Care Clinic',
            detailsandlocation: 'https://g.co/kgs/7StEYXf',
            contact: '+91 7305609555',
            doctors: ['Dr.Sabrinath']
        },
        {
            cityName: 'Chennai',
            specialty:'Pulmonology',
            name: 'Chennai Chest Centre',
            detailsandlocation: 'https://g.co/kgs/7TYatPv',
            contact: '08147804244',
            doctors: ['Dr. Senthil Kumar', 'Dr. Sumathi Senthil']
        },
        {
            cityName: 'Chennai',
            specialty:'Pulmonology',
            name: 'Dr.Sahana.K - Health Hale',
            detailsandlocation: 'https://g.co/kgs/bxUUCZT',
            contact: '+91-9382833924',
            doctors: ['Dr. Sahana K']
        },
        {
            cityName: 'Chennai',
            specialty:'Pulmonology',
            name: 'ARCA CLINIC',
            detailsandlocation: 'https://g.co/kgs/CENAHkH',
            contact: '+91- 73974 74777',
            doctors: [' Dr.VISWAMBHAR', 'Dr.VALLABHANENI']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Neruology',
            name: 'Neuro Clinic Plus',
            detailsandlocation: 'https://g.co/kgs/Xa9fYZS',
            contact: '7337556006',
            doctors: [ 'Dr. Aparna Gupta']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Neruology',
            name: 'Dr Bhaskar Shukla',
            detailsandlocation: 'https://g.co/kgs/iB488fP',
            contact: '+91 84 84848417',
            doctors: ['Dr. Bhaskar Shukla']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Neruology',
            name: 'Neurology and Sleep Centre',
            detailsandlocation: 'https://g.co/kgs/1Jj79bB',
            contact: '+91-11-46070321',
            doctors: ['DR. MANVIR BHATIA']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Neruology',
            name: 'IBS Hospital',
            detailsandlocation: 'https://g.co/kgs/h1wo54h',
            contact: ' +91 9675247365',
            doctors: ['Dr. Sanjay Kumar Choudhary', 'Dr. N. Sairam']
        },
        
        {
            cityName: 'NewDelhi',
            specialty:'Neruology',
            name: 'Advanced Neuro Clinic',
            detailsandlocation: 'https://g.co/kgs/87XoM3N',
            contact: '07947122946',
            doctors: ['Dr. Manish Sinha']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Cardiology',
            name: 'Fortis Escorts Heart Institute',
            detailsandlocation: 'https://g.co/kgs/RrCV36H',
            contact: '+91-124 4921021',
            doctors: ['Dr. Ashok SethDr. Vivek Vij', '']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Cardiology',
            name: 'National Heart Institute',
            detailsandlocation: 'https://g.co/kgs/fbXFEjS',
            contact: ' +91 11-46600700',
            doctors: ['Dr. O. P Yadava', 'Dr. Vinod Sharma']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Cardiology',
            name: 'Kukreja Hospital and Heart Centre',
            detailsandlocation: 'https://g.co/kgs/3Pr1VXC',
            contact: '011-22753123',
            doctors: ['Dr. Rajan Pradhan', 'Dr. Anurag Garg']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Cardiology',
            name: 'RLKC Hospital & Metro Heart Institute',
            detailsandlocation: 'https://g.co/kgs/dE5iQba',
            contact: '+91 120 4366666',
            doctors: ['Dr. R.K. Choudhary', 'Dr. Piyusha Kulshrestha']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Cardiology',
            name: 'IHLD',
            detailsandlocation: 'https://g.co/kgs/Q5dGJFZ',
            contact: '+91 99100 22135',
            doctors: ['Dr. Rahul Chandola', 'Dr. Dheeraj Jhamb']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pediatrics',
            name: 'Madhukar Rainbow Childrens Hospital & BirthRight',
            detailsandlocation: 'https://g.co/kgs/BE7nkSF',
            contact: '08037836551',
            doctors: ['Dr. PAYAL CHAUDHARY', 'Dr. JAYASREE SUNDAR']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pediatrics',
            name: 'Rosewalk Healthcare',
            detailsandlocation: 'https://g.co/kgs/qeYQNon',
            contact: '08037836551',
            doctors: ['Dr. PAYAL CHAUDHARY', 'Dr. JAYASREE SUNDAR']
        },

        {
            cityName: 'NewDelhi',
            specialty:'Pediatrics',
            name: 'East Delhi Advance NICU',
            detailsandlocation: 'https://g.co/kgs/5Lq93cq',
            contact: '+91 80770 86002',
            doctors: ['Dr. Ramji Bhardwaj']
        },

        {
            cityName: 'NewDelhi',
            specialty:'Pediatrics',
            name: 'Apollo Cradle Maternity & Childrens Hospital',
            detailsandlocation: 'https://g.co/kgs/UxSgMdG',
            contact: '(011) 4424 4424',
            doctors: ['Dr. Anupam Sibal', 'Dr. Urvashi']
        },

        {
            cityName: 'NewDelhi',
            specialty:'Pediatrics',
            name: 'BLK-Max Super Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/xraSNoZ',
            contact: '+91-11-30403040',
            doctors: ['Dr. Abhideep Chaudhary', 'Dr. Dharma Choudhary']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Dental',
            name: 'Green Park Dental Clinic',
            detailsandlocation: 'https://g.co/kgs/7dWomvU',
            contact: '011-41617777 ',
        },
        {
            cityName: 'NewDelhi',
            specialty:'Dental',
            name: 'DR ASHOKS DENTISTREE',
            detailsandlocation: 'https://g.co/kgs/ZJCJihG',
            contact: '9319595060',
            doctors: ['Dr Ashok', 'Dr.Pawan']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Dental',
            name: 'Smile Dental Care',
            detailsandlocation: 'https://g.co/kgs/San6K27',
            contact: '+91 81438 77100',
            doctors: ['Dr. Bhanusri Kambampati', 'Dr. N. Vasavi']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Dental',
            name: 'DR BHUTANI DENTAL CLINIC',
            detailsandlocation: 'https://g.co/kgs/zZ5TTMh',
            contact: '011 4564-1441',
            doctors: ['Dr. Deepak Bhutani', 'Dr. Pratima Bhutani']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Dental',
            name: 'Smile Dental Hub',
            detailsandlocation: 'https://g.co/kgs/FrqBfbF',
            contact: ' 01141662706',
            doctors: ['Dr.Abhay Pandye', 'Dr.Jitender Sharma']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Orthopedics',
            name: 'Dr D K Dhiraj',
            detailsandlocation: 'https://g.co/kgs/NMJopw4',
            contact: '+91 11-351 256 00',
            doctors: ['Dr. D.K. Dhiraj']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Orthopedics',
            name: 'Delhi Institute of Trauma & Orthopedics',
            detailsandlocation: 'https://g.co/kgs/XLufzJq',
            contact: '+91 99711 92233',
            doctors: ['Dr. Shekhar Srivastav', 'Dr. Ankit Varshney']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Orthopedics',
            name: 'Ganesh Ortho Trauma & Medical Centre',
            detailsandlocation: 'https://g.co/kgs/3qmn3Sr',
            contact: '011 43146100',
            doctors: ['Dr. Akhil Bhargava']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Orthopedics',
            name: 'Ortho Star Hospital',
            detailsandlocation:'https://orthostarhospital.com/',
            contact: '092688 26745',
        },
        {
            cityName: 'NewDelhi',
            specialty:'Orthopedics',
            name: 'Sankalp Hospital',
            detailsandlocation: 'https://g.co/kgs/VXLvbzW',
            contact: '7947141848',
            doctors: ['Dr. Parul Gupta']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pulmonology',
            name: 'Sukhmani Hospital',
            detailsandlocation: 'https://g.co/kgs/EgaEbH2',
            contact: '+91-9289260077',
            doctors: ['Dr Kanwal', 'Dr Balbir Gandhi']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pulmonology',
            name: 'Apollo Spectra Hospitals',
            detailsandlocation: 'https://g.co/kgs/e3e5TPz',
            contact: '084484 40991',
            doctors: ['Dr. Sanjiv Dang', 'Dr. Rajeev Nangia']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pulmonology',
            name: 'BLK-Max Super Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/8smMDRd',
            contact: '91-11-30403040',
            doctors: ['Dr. T. S. Kler', 'Dr. Subhash Chandra']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pulmonology',
            name: 'Manipal Hospital',
            detailsandlocation: 'https://g.co/kgs/W5x3MoJ',
            contact: '011 4967 4967',
            doctors: ['Dr. Leena N Sreedhar', 'Dr. CS Narayanan']
        },
        {
            cityName: 'NewDelhi',
            specialty:'Pulmonology',
            name: 'Max Super Speciality Hospital',
            detailsandlocation: 'https://g.co/kgs/WVPj7k4',
            contact: '+91 92688 80303',
            doctors: ['Dr. Balbir Singh', 'Dr. Sandeep Budhiraja']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Neruology',
            name: ' Mastishk Neuro Clinic Ellisbridge ',
            detailsandlocation: 'https://g.co/kgs/TZS5uMM',
            contact: '91 7069997998',
            doctors: ['Dr. Bhumir Chauhan']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Neruology',
            name: 'SETU Neurology Clinic ',
            detailsandlocation: 'https://g.co/kgs/vTkrP9S',
            contact: ' 097238 65577',
            doctors: ['DR. VISHAL JOGI', '']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Neruology',
            name: 'Shalby Hospital',
            detailsandlocation: 'https://g.co/kgs/NauFMqi',
            contact: '079 4020 3000',
            doctors: ['Dr. Harshil Shah', 'Dr. Vikram Shah']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Neruology',
            name: 'Mastishk Neuro Clinic Maninagar',
            detailsandlocation: 'https://g.co/kgs/79gD1Kh',
            contact: '91 7069997998',
            doctors: ['Dr. Bhumir Chauhan']
        },
        
        {
            cityName: 'Ahmedabad',
            specialty:'Neruology',
            name: 'Harsh Spine And Neurosurgical Hospital',
            detailsandlocation: 'https://g.co/kgs/BFEJvhd',
            contact: '072030 05007',
            doctors: ['Dr. Harsh']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Cardiology',
            name: 'Apex Heart Institute',
            detailsandlocation: 'https://g.co/kgs/qDJLptq',
            contact: '079 4100 5922',
            doctors: ['Dr. Tejas Patel', 'Dr. Sanjay C. Shah']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Cardiology',
            name: 'U N Mehta Institute of Cardiology & Research Centre',
            detailsandlocation: 'https://g.co/kgs/TXFhv6M',
            contact: '079 2268 4200',
            doctors: ['Dr. Jayesh Prajapati', 'Dr. Shyam Sunder Kothari']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Cardiology',
            name: 'Apollo Hospital International Limited Ahmedabad',
            detailsandlocation: 'https://g.co/kgs/bCBkkSN',
            contact: '084018 01066',
            doctors: ['Dr Hasit Joshi', 'Dr Jayesh Prajapati']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Cardiology',
            name: 'Hradayam Heart Hospital Satellite',
            detailsandlocation: 'https://g.co/kgs/tgKq9SR',
            contact: ' 063533 93768',
            doctors: ['Dr. Sunil Gurmukhani ']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Cardiology',
            name: 'Dhabkar Heart Foundation',
            detailsandlocation: 'https://g.co/kgs/RTCpqUv',
            contact: ' 080 4805 3198',
            doctors: ['Dr. Shamik Brahmbhatt']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pediatrics',
            name: 'Sneh Children Hospital',
            detailsandlocation: 'https://g.co/kgs/cdNieUp',
            contact: '070690 33322',
            doctors: ['Dr. Khanjan Shah', 'Dr. Savan Patel']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pediatrics',
            name: 'Apple Children Hospital',
            detailsandlocation: 'https://g.co/kgs/cYGkBYW',
            contact: '099138 11663',
            doctors: ['Dr. Parag Dagli', 'Dr. Ankur Kothari']
        },

        {
            cityName: 'Ahmedabad',
            specialty:'Pediatrics',
            name: 'Asian Children & Neonatal Hospital',
            detailsandlocation: 'https://g.co/kgs/oLMZhkS',
            contact: '081410 30555',
            doctors: ['Dr. Deepak Somani', 'Dr. Imran S. Patel']
        },

        {
            cityName: 'Ahmedabad',
            specialty:'Pediatrics',
            name: 'Deep multi-speciality Children Hospital',
            detailsandlocation: 'https://g.co/kgs/vsiSvrx',
            contact: '079 2741 1327',
            doctors: ['Dr. Divesh Shah']
        },

        {
            cityName: 'Ahmedabad',
            specialty:'Pediatrics',
            name: 'TheChildPlus Childrens Hospital',
            detailsandlocation: 'https://g.co/kgs/tK2tb6y',
            contact: '070434 44455',
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Dental',
            name: 'Maninagar Dental Hospital & Implant Center',
            detailsandlocation: 'https://g.co/kgs/n2G4m12',
            contact: '085304 50250',
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Dental',
            name: 'Teeth Care Centre Dental Hospital ',
            detailsandlocation: 'https://g.co/kgs/aeMMnqW',
            contact: '+91 9377783384 ',
            doctors: ['Dr. Nirav Patel', 'Dr. Pankti Patel']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Dental',
            name: 'Vasupujya Dental',
            detailsandlocation: 'https://g.co/kgs/ioSwZNr',
            contact: '098980 21999',
            doctors: ['Prof. (Dr.) Rohan Bhatt']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Dental',
            name: '32 Pearls Multispeciality Dental Clinic And Implant Centre',
            detailsandlocation: 'https://g.co/kgs/Ng1rPTs',
            contact: '094995 57474',
            doctors: ['Mr. Jaimin Patel']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Dental',
            name: 'Aashu dental and multispeciality clinic',
            detailsandlocation: 'https://g.co/kgs/FUwzNUM',
            contact: ' 098251 58578',
            doctors: ['Dr. Jolly Shah', 'Dr. Manish Shah']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Orthopedics',
            name: 'Aditya Orthopedic Hospital',
            detailsandlocation: 'https://g.co/kgs/UPKUPht',
            contact: ' 099090 24605',
            doctors: ['Dr. Maharshi Bhatt ', ' Dr. Amit Agrawal']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Orthopedics',
            name: 'Shalya Orthopedic Hospital',
            detailsandlocation: 'https://g.co/kgs/cx8vphR',
            contact: '072290 29029',
            doctors: ['Dr. Kartik Patel ']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Orthopedics',
            name: 'Chintan Orthopedic and Maternity Hospital Ahmedabad',
            detailsandlocation: 'https://g.co/kgs/ipLCp38',
            contact: '079 2663 7840',
            doctors: ['Dr. Mehul V. Mashkaria', 'Dr. Hina M. Mashkaria']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Orthopedics',
            name: 'Arihant Orthopedic',
            detailsandlocation: 'https://g.co/kgs/jNn4h8f',
            contact: ' 090999 53307',
            doctors: [' Dr. Tejas Gandhisir']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Orthopedics',
            name: 'PMG Orthopedic Hospital',
            detailsandlocation: 'https://g.co/kgs/enwwZU1',
            contact: ' 096627 70141',
            doctors: ['Dr. Hiren Patel']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pulmonology',
            name: ' HCG HOSPITAL ',
            detailsandlocation: 'https://g.co/kgs/7RmJCMj',
            contact: '070168 43273',
            doctors: ['Dr. Dharit Shah']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pulmonology',
            name: 'Shwas Chest Clinic',
            detailsandlocation: 'https://g.co/kgs/vGLr59D',
            contact: '072020 50108',
            doctors: ['Dr.Dave']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pulmonology',
            name: 'Lungs Care Clinic',
            detailsandlocation: 'https://g.co/kgs/YzqK6dB',
            contact: '099259 65136',
            doctors: ['Dr. Vaishal Sheth']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pulmonology',
            name: 'Dr. Rahul K Jalan - Chest Diseases Clinic',
            detailsandlocation: 'https://g.co/kgs/nBtTYdv',
            contact: '077780 30790',
            doctors: ['Dr. Rahul K Jalan']
        },
        {
            cityName: 'Ahmedabad',
            specialty:'Pulmonology',
            name: 'Devam Hospital',
            detailsandlocation: 'https://g.co/kgs/FhnZ5m4',
            contact: '094288 02595',
            doctors: ['Dr. Mayankbhai']
        },


        
    ];

    const specialtyImages = {
        'Neurology': 'https://cdn.dribbble.com/users/6869698/screenshots/17358043/media/3062d86935de905b06a60291dc0da84f.jpg?resize=400x300&vertical=center',
        'Cardiology': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIz_lDeXRNz4Z5SvBUflh7bW8kVZyLo8Bz4g&s',
        'Pediatrics':'https://www.shutterstock.com/image-vector/toddler-leaves-baby-pediatrician-logo-260nw-2212262931.jpg',
        'Dental':'https://i.pinimg.com/originals/88/f1/d7/88f1d7bf39b123373b673d5dac2815e8.jpg',
        'Orthopedics':'https://previews.123rf.com/images/flyingprogresive/flyingprogresive1412/flyingprogresive141200104/34800246-green-cross-pharmachy-orthopedic-icon-orthopaedic-icon-symbol.jpg',
        'Pulmonology':'https://w7.pngwing.com/pngs/702/35/png-transparent-lungs-illustration-tuberculosis-world-tb-day-lung-awareness-pulmonology-lungs-infographic-leaf-logo.png',
        
    };

    
    const filteredHospitals = hospitalsData.filter(hospital => {
        return hospital.cityName.toLowerCase() === city.toLowerCase() &&
               hospital.specialty.toLowerCase() === specialty.toLowerCase();
    });

    
    const specialtyImageDiv = document.getElementById('specialty-image');
    const imageSrc = specialtyImages[specialty] || 'images/default.png'; // Default image if no match
    specialtyImageDiv.innerHTML = `<img src="${imageSrc}" alt="${specialty} image" class="specialty-image">`;

    
    const resultsDiv = document.getElementById('results');
    if (filteredHospitals.length > 0) {
        resultsDiv.innerHTML = `<h2>Showing hospitals in ${city} specializing in ${specialty}:</h2>`;
        filteredHospitals.forEach(hospital => {
            resultsDiv.innerHTML += `
                <div class="hospital">
                    <h3>${hospital.name}</h3>
                    <p>Details And Location: <a href="${hospital.detailsandlocation}" target="_blank">${hospital.detailsandlocation}</a></p>
                    <p>Contact: ${hospital.contact}</p>
                    <p>Available Doctors: ${hospital.doctors.join(', ')}</p>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = `<p>No hospitals found in ${city} specializing in ${specialty}.</p>`;
    }
});
