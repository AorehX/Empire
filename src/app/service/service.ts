import {Component} from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {
  titleHeading: string = "Eddy's Hair Empire"
  aboutUs: string = "About Us";
  theMission: string = "Our Mission"
  offerService: string = "Services Offered"
  hairService: string = "Hair Services"

  serviceList: string [] = [
    "Precision Cuts & Styling - Custom cuts tailored to face shape and lifestyle.",
    "Color Transformations - Highlights, balayage, ombre, and fashion colors.",
    "Hair Treatments - Deep conditioning, keratin treatments, and scalp therapy.",
    "Extensions & Weaves - Length and volume enhancement with premium hair.",
    "Special Event Styling - Weddings, proms, and red-carpet ready looks.",
    "Texture Services - Relaxers, perms, and natural hair care."
  ]
  consultService: string [] = [
    "Personal Style Assessment - Discover your unique fashion identity.",
    "Wardrobe Consultation - Curate pieces that complement your hair and lifestyle.",
    "Hair-Fashion Coordination - Seamlessly blend hair styling with outfit selection.",
    "Trend Forecasting - Stay ahead with upcoming fashion and hair trends."
  ]
  hairEmpire: string [] = [
    "Expert Team - Certified stylists with years of industry experience.",
    "Premium Products - We use only high-quality, professional-grade products.",
    "Personalized Approach - Every client receives customized service.",
    "Trendsetting Styles - Stay current with the latest fashion and hair trends.",
    "Comfortable Environment - Modern, welcoming salon atmosphere.",
    "Satisfaction Guarantee - Your happiness is our top priority",
  ]
  businessTime: string [] = [
    "Monday - Wednesday: 9:00 AM - 7:00 PM",
    "Thursday - Friday: 9:00 AM - 8:00 PM",
    "Saturday: 8:00 AM - 6:00 PM",
    "Sunday: 10:00 AM - 5:00 PM",
  ]
  locationContact: string [] = [
    "Address: No 28, airport road opposite mercury bank",
    "Phone: +234-703-307-4320",
    "Email: emuekpereendurance810@gmail.com",
  ]
  consultation: string [] = [
    "Initial Consultation - Discuss your vision and hair goals",
    "Style Assessment - Evaluate hair type, condition, and lifestyle",
    "Custom Plan - Create a personalized treatment and styling plan",
    "Service Execution - Professional application of chosen services",
    "Styling Education - Learn how to maintain your new look at home"
  ]
  loyaltyRewards: string[] = [
    "Empire VIP Club - Exclusive discounts and early access to new services",
    "Referral Program - Earn rewards for bringing friends to the empire",
    "Birthday Specials - Celebrate your special day with us",
  ]
  educational: string[] = [
    "Monthly styling workshops for clients",
    "Fashion and hair trend seminars",
    "At-home maintenance tutorials"
  ]
}
