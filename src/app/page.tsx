import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Converter from "@/components/Converter";
import BackendStatus from "@/components/BackendStatus";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <Header />
      <BackendStatus />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="pt-20 pb-10 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6 animate-fade-in">
              <Sparkles className="h-3 w-3" />
              차세대 AI 정규화 기술
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              <span className="text-blue-500">사람</span>과 <span className="text-blue-400">AI</span>의 간극을 메우다
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Invisible AI-Bridge는 복잡한 메모, PDF, 파일을 
              구조화된 AI 가독성 형식으로 자동 변환합니다. 학습 곡선 제로, 정확도 200% 향상.
            </p>
          </div>
        </section>

        {/* Converter Section */}
        <section className="flex-1 min-h-[600px] flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
          <Converter />
        </section>
        
        {/* Features Minimalist */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <h3 className="text-blue-500 font-bold text-lg mb-2">보이지 않는 정규화</h3>
              <p className="text-gray-500 text-sm">사용자의 개입 없이 자동화된 데이터 구조화.</p>
            </div>
            <div className="group">
              <h3 className="text-blue-500 font-bold text-lg mb-2">프로토콜 변환</h3>
              <p className="text-gray-500 text-sm">계층적 Markdown 및 JSON 변환 지원.</p>
            </div>
            <div className="group">
              <h3 className="text-blue-500 font-bold text-lg mb-2">환각 현상 제로</h3>
              <p className="text-gray-500 text-sm">엄격한 추출 모드로 데이터 무결성 보장.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
