import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { products } from '@/data/products';

export async function POST(request: Request) {
  try {
    const { query, history } = await request.json();

    // Setup fallback logical rules exactly as requested if no API key is available or an issue occurs.
    const runFallback = (userText: string) => {
      let replyText = '';
      let rec = undefined;

      const phoneMatch = userText.match(/(?:\+?88)?01[3-9]\d{8}/);
      const lower = userText.toLowerCase();

      if (phoneMatch) {
        replyText = `ধন্যবাদ! আপনার নম্বরটি (${phoneMatch[0]}) সিস্টেমে সংরক্ষিত হয়েছে। আমাদের সিনিয়র বিজনেস আর্কিটেক্ট পরবর্তী ৩০ মিনিটের মধ্যে সম্পূর্ণ কাস্টমাইজড এক্সিকিউশন প্ল্যান নিয়ে আপনার WhatsApp-এ যোগাযোগ করবেন।`;
      } else if (
        lower.includes('f-commerce') || lower.includes('রিটার্ন') || lower.includes('কুরিয়ার') ||
        lower.includes('courier') || lower.includes('ইনবক্স') || lower.includes('ডেলিভারি') ||
        lower.includes('অর্ডার') || lower.includes('ফেইসবুক') || lower.includes('facebook')
      ) {
        replyText = '📊 ডায়াগনসিস ফলাফল: আপনার বিজনেসে কুরিয়ার রিটার্ন ও ইনবক্স কনভার্সন লিকেজ শনাক্ত হয়েছে।\n\nসুপারিশ: "F-Commerce OS" সিস্টেমটিতে রয়েছে ৩-ধাপের কুরিয়ার ভেরিফিকেশন এসওপি, ফেক অর্ডার ব্লকার এবং ৯টি সাইকোলজিক্যাল চ্যাট স্ক্রিপ্ট যা রিটার্ন রেট ১২-১৫% এ নামিয়ে আনে।';
        rec = {
          title: 'Facebook Commerce OS',
          price: '৳1,499',
          badge: '⚡ 92% ACCURACY MATCH',
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent('সালাম, AI Router সুপারিশকৃত F-Commerce OS (৳1,499) প্যাকেজটি অর্ডার ও ইনস্টল করতে চাই।')}`,
        };
      } else if (
        lower.includes('profile') || lower.includes('প্রোফাইল') || lower.includes('b2b') ||
        lower.includes('ক্লায়েন্ট') || lower.includes('টেন্ডার') || lower.includes('ব্র্যান্ড')
      ) {
        replyText = '📊 ডায়াগনসিস ফলাফল: কর্পোরেট ক্লায়েন্ট কনভার্সন ও প্রাতিষ্ঠানিক বিশ্বাসযোগ্যতার গ্যাপ পাওয়া গেছে।\n\nসুপারিশ: "Growth Business Profile Suite" ১২-১৫ পৃষ্ঠার রিসার্চ-ব্যাকড স্ট্র্যাটেজিক ফাইল, ভিশন আর্কিটেকচার এবং এডিটেবল ডক ফরম্যাটে তৈরি করা হয় — যা টেন্ডার ও বড় ক্লায়েন্ট পিচে ৯৮% গ্রহণযোগ্যতা দেয়।';
        rec = {
          title: 'Growth Business Profile Suite',
          price: '৳1,499',
          badge: '🏆 B2B FLAGSHIP MATCH',
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent('সালাম, AI Router সুপারিশকৃত Growth Business Profile Suite (৳1,499) তৈরি করতে চাই।')}`,
        };
      } else if (
        lower.includes('finance') || lower.includes('ফাইন্যান্স') || lower.includes('হিসাব') ||
        lower.includes('কস্টিং') || lower.includes('প্রফিট') || lower.includes('টাকা') ||
        lower.includes('মার্জিন')
      ) {
        replyText = '📊 ডায়াগনসিস ফলাফল: হিডেন বিজনেস কস্টিং এবং ক্যাশ-ফ্লো লিকেজ শনাক্ত হয়েছে।\n\nসুপারিশ: "Modern Finance & Costing Stack" অটোমেটিক গ্রস-নেট মার্জিন ক্যালকুলেটর, ইনভেন্টরি ক্যাশ-ফ্লো শিট এবং ব্রেক-ইভেন ট্র্যাকার সরবরাহ করে।';
        rec = {
          title: 'Modern Finance & Costing Stack',
          price: '৳1,499',
          badge: '💰 FINANCIAL CONTROL MATCH',
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent('সালাম, AI Router সুপারিশকৃত Finance & Costing Stack (৳1,499) নিতে চাই।')}`,
        };
      } else if (
        lower.includes('অটোমেশন') || lower.includes('অপারেশন্স') || lower.includes('টিম') ||
        lower.includes('os') || lower.includes('ম্যানেজমেন্ট') || lower.includes('sop')
      ) {
        replyText = '📊 ডায়াগনসিস ফলাফল: প্রতিষ্ঠাতা নির্ভর বিশৃঙ্খলা (Founder-Bottleneck) ধরা পড়েছে।\n\nসুপারিশ: "Founder & Team Transition OS" প্রতিদিনের টিম মনিটরিং এসওপি, কেপিআই শিট ও ডেলিগেশন ফ্রেমওয়ার্ক দিয়ে আপনার ব্যবসা স্বয়ংক্রিয় করতে প্রস্তুত।';
        rec = {
          title: 'Founder & Team Transition OS',
          price: '৳1,499',
          badge: '⚙️ OPERATIONS MATCH',
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent('সালাম, AI Router সুপারিশকৃত Founder & Team Transition OS (৳1,499) সম্পর্কে কথা বলতে চাই।')}`,
        };
      } else {
        replyText = '📊 ডায়াগনসিস ফলাফল: আপনার ব্যবসার জন্য প্রাথমিক ফাউন্ডেশন এবং আর্কিটেকচারাল স্ট্যাক প্রয়োজন।\n\nসুপারিশ: "Starter Business Profile" অথবা আমাদের কমপ্লিট বান্ডেল সিস্টেম দিয়ে ব্যবসা শুরু করলে ঝুঁকি ও সময় ৭০% কমে আসে। বিস্তারিত সহায়তার জন্য নিচের হোয়াটসঅ্যাপ লিংকে ক্লিক করুন বা ফোন নম্বর লিখুন।';
        rec = {
          title: 'Starter Business Profile',
          price: '৳999',
          badge: '🚀 FOUNDATION MATCH',
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent('সালাম, AI Router সুপারিশকৃত Starter Business Profile (৳999) প্যাকেজটি সম্পর্কে জানতে চাই।')}`,
        };
      }

      return NextResponse.json({ reply: replyText, recommendation: rec });
    };

    if (!process.env.GEMINI_API_KEY) {
      return runFallback(query);
    }

    try {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash", // Good default fast agentic model on Gemini
        systemInstruction: `You are the Nexus Lift Senior Business & Growth Consultant (বাংলা ও বাংলিশে অত্যন্ত প্রফেশনাল, সহানুভূতিশীল ও কনভার্শন-ড্রিভেন).
You consult Bangladeshi entrepreneurs, diagnose their business issues intelligently, and proactively guide them to WhatsApp to order solutions.

Here is your exclusive catalog of solutions (Nexus Lift OS and Templates):
${JSON.stringify(products.map(p => ({ id: p.id, title: p.title, price: p.price, desc: p.desc, features: p.features })), null, 2)}

**Behavior (Sales Divert Funnel):**
1. Listen to their pain points or business model.
2. Provide a 1-2 sentence razor-sharp diagnosis in professional Bangla.
3. If they leave a phone number, say: "ধন্যবাদ! আপনার নম্বরটি সিস্টেমে সংরক্ষিত হয়েছে। আমাদের সিনিয়র বিজনেস আর্কিটেক্ট পরবর্তী ৩০ মিনিটের মধ্যে আপনার WhatsApp-এ যোগাযোগ করবেন।"
4. Recommend ONE best product. Return structured JSON exactly matching the typescript shape below. Do NOT wrap in markdown \`\`\`json. Just the raw JSON object.

Typescript structure to return:
{
  "reply": "string (Your conversational output and diagnosis in Bangla)",
  "recommendation": {
    "title": "string (The product title)",
    "price": "string (The price e.g. ৳1,499)",
    "badge": "string (A short uppercase badge e.g. '🔥 92% ACCURACY MATCH')",
    "waUrl": "string (WhatsApp URL: https://wa.me/8801814716713?text=URI_ENCODED_MESSAGE)"
  } // (Set recommendation to null if no specific product matches yet)
}

For the WhatsApp URL message, format it like: "সালাম, AI Router সুপারিশকৃত [Product Title] ([Price]) প্যাকেজটি অর্ডার ও ইনস্টল করতে চাই।"
`
      });

      const prompt = `User Query: ${query}`;

      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.2
        }
      });

      const responseText = result.response.text();
      const data = JSON.parse(responseText);

      return NextResponse.json(data);
    } catch (e) {
      console.error("Gemini API Error:", e);
      // Gracious fallback if API is rate limited or fails
      return runFallback(query);
    }

  } catch (error) {
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
