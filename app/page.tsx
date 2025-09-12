"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  BarChart3,
  Calculator,
  Database,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Target,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function ExcelExpertSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const servicos = [
    {
      icon: BarChart3,
      titulo: "Dashboards Profissionais",
      descricao: "Criação de dashboards interativos e visuais para análise de dados empresariais com gráficos dinâmicos e KPIs.",
      preco: "A partir de R$ 300"
    },
    {
      icon: Calculator,
      titulo: "Automação de Planilhas",
      descricao: "Automatização de processos repetitivos com VBA e fórmulas avançadas para economia de tempo e redução de erros.",
      preco: "A partir de R$ 400"
    },
    {
      icon: Database,
      titulo: "Análise de Dados",
      descricao: "Tratamento e análise de grandes volumes de dados com Power Query, tabelas dinâmicas e funções estatísticas.",
      preco: "A partir de R$ 300"
    },
    {
      icon: TrendingUp,
      titulo: "Relatórios Gerenciais",
      descricao: "Desenvolvimento de relatórios executivos automatizados com indicadores de performance e análise de tendências.",
      preco: "A partir de R$ 700"
    },
    {
      icon: Target,
      titulo: "Controle Financeiro",
      descricao: "Planilhas de controle financeiro, fluxo de caixa, orçamentos e projeções financeiras para PMEs.",
      preco: "A partir de R$ 300"
    },
    {
      icon: Users,
      titulo: "Gestão de Equipes",
      descricao: "Sistemas de controle de produtividade, escala de funcionários e acompanhamento de metas de vendas.",
      preco: "A partir de R$ 500"
    }
  ];

  const trabalhos = [
    {
      titulo: "Planilha Para Empresa Química",
      categoria: "Química",
      descricao: "Planilha que auxilia no planejamento de lotes, comparação, exibição de resultados e acompanhamento diário dos resultados.",
      resultados: ["Diminuição do tempo de planejamento de 3 dias para 1 dia", "Redução de 60% no tempo de análise", "Melhor controle e acompanhamento de todos os produtos"]
    },
    {
      titulo: "Cadastro e Relatórios de Paradas",
      categoria: "Manutenção",
      descricao: "Sistema automatizado de cadastro de paradas de áreas e criação de um relatório com dashboards.",
      resultados: ["Retirada a necessidade de usar cadernos para acompanhar paradas de áreas", "Melhor controle dos equipamentos críticos", "Relatórios automáticos para diretoria"]
    },
    {
      titulo: "Análise de Produção - Britagem de Minérios",
      categoria: "Britagem",
      descricao: "Planilha de controle que cadastra cada material processado e geração de ralatórios de toda etapa produtiva.",
      resultados: ["Redução no estoque parado", "Otimização e visualização dos dados de todo material processado", "Relatórios que auxiliam em ver desvios de produção o que diminuio a ociosidade em 25%"]
    }
  ];

  const depoimentos = [
    {
      nome: "Carlos Mendes",
      cargo: "Diretor Comercial",
      empresa: "Tech Solutions SP",
      conteudo: "O trabalho ficou excepcional! O dashboard criado nos deu uma visão completamente nova dos nossos dados de vendas. Recomendo muito!",
      avaliacao: 5
    },
    {
      nome: "Marina Silva",
      cargo: "Gerente Financeira", 
      empresa: "Construtora Horizon",
      conteudo: "A automação da planilha financeira economizou horas do meu time. Agora temos relatórios precisos em segundos. Profissional excelente!",
      avaliacao: 5
    },
    {
      nome: "Roberto Santos",
      cargo: "Proprietário",
      empresa: "Distribuidora Premium",
      conteudo: "Transformou completamente nossa gestão de estoque. O sistema de alertas evitou várias rupturas e otimizou nossas compras.",
      avaliacao: 5
    }
  ];

  const stats = [
    { numero: "50+", label: "Projetos Entregues" },
    { numero: "30+", label: "Clientes Satisfeitos" },
    { numero: "7+", label: "Anos de Experiência" },
    { numero: "98%", label: "Taxa de Aprovação" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Excel Expert BR</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors">
                  Serviços
                </a>
                <a href="#trabalhos" className="text-gray-700 hover:text-green-600 transition-colors">
                  Portfólio
                </a>
                <a href="#depoimentos" className="text-gray-700 hover:text-green-600 transition-colors">
                  Depoimentos
                </a>
                <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">
                  Contato
                </a>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 border-t border-gray-200 px-2 pb-3 pt-2 sm:px-3">
                <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Serviços
                </a>
                <a href="#trabalhos" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Portfólio
                </a>
                <a href="#depoimentos" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Depoimentos
                </a>
                <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Contato
                </a>
                <div className="px-3 py-2">
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              <Award className="mr-2 h-4 w-4" />
              Especialista Certificado Microsoft Excel
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Transforme Seus Dados em{" "}
              <span className="text-green-600">Decisões Inteligentes</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
              Especialista em Excel com mais de 5 anos de experiência criando soluções personalizadas 
              para empresas brasileiras. Dashboards, automações e análises que geram resultados reais.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-green-600 px-8 py-3 text-white hover:bg-green-700">
                Ver Meus Trabalhos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 px-8 py-3 text-green-600 hover:bg-green-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.numero}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Serviços Especializados em Excel
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Soluções completas para otimizar seus processos e potencializar seus resultados
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico, index) => (
              <Card key={index} className="border-gray-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <servico.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {servico.titulo}
                  </CardTitle>
                  <div className="text-lg font-semibold text-green-600">
                    {servico.preco}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed text-gray-600">
                    {servico.descricao}
                  </CardDescription>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trabalhos/Portfolio Section */}
      <section id="trabalhos" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Casos de Sucesso
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Projetos reais que transformaram a gestão de dados dos meus clientes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {trabalhos.map((trabalho, index) => (
              <Card key={index} className="border-gray-200">
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 p-6">
                  <img 
                    src="https://placehold.co/400x200" 
                    alt="Screenshot de dashboard do Excel mostrando gráficos de vendas coloridos e tabelas de dados organizadas" 
                    className="h-full w-full rounded-lg object-cover shadow-md"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    {trabalho.categoria}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {trabalho.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed text-gray-600">
                    {trabalho.descricao}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Resultados Alcançados:</h4>
                    {trabalho.resultados.map((resultado, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        {resultado}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              O Que Dizem Meus Clientes
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Depoimentos reais de empresários que confiaram no meu trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="mb-4 leading-relaxed text-gray-700">
                    "{depoimento.conteudo}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">
                      {depoimento.nome}
                    </div>
                    <div className="text-sm text-gray-600">
                      {depoimento.cargo} - {depoimento.empresa}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Como Funciona
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Processo simples e transparente para entregar a solução perfeita
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">1. Conversa Inicial</h3>
              <p className="text-gray-600">Entendo sua necessidade e objetivo através do WhatsApp ou videochamada</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">2. Análise & Proposta</h3>
              <p className="text-gray-600">Analiso seus dados e envio proposta detalhada com prazo e investimento</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">3. Desenvolvimento</h3>
              <p className="text-gray-600">Crio a solução personalizada e envio previews para ajustes</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">4. Entrega & Suporte</h3>
              <p className="text-gray-600">Entrego o projeto finalizado com treinamento e suporte incluído</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Vamos Conversar Sobre Seu Projeto?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Entre em contato e receba um orçamento personalizado em até 24 horas
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Informações de Contato */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Formas de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp (Preferido)</h4>
                    <p className="text-gray-600">+55 (11) 99999-9999</p>
                    <Button variant="outline" className="mt-2 border-green-600 text-green-600 hover:bg-green-50">
                      Iniciar Conversa
                    </Button>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@excelexpertbr.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">+55 (11) 3333-4444</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-green-50 p-6">
                <h4 className="mb-2 font-semibold text-green-800">Atendimento Rápido</h4>
                <p className="text-green-700">
                  Respondo em até 2 horas no horário comercial (9h às 18h) 
                  e em até 24h nos finais de semana.
                </p>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Solicite Seu Orçamento
                  </CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo e receba uma proposta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Nome *
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        WhatsApp *
                      </label>
                      <Input placeholder="(11) 99999-9999" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      E-mail *
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <Input placeholder="Nome da sua empresa" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Tipo de Projeto *
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                      <option>Selecione o tipo de projeto</option>
                      <option>Dashboard</option>
                      <option>Automação</option>
                      <option>Análise de Dados</option>
                      <option>Relatório Gerencial</option>
                      <option>Controle Financeiro</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Descreva seu projeto *
                    </label>
                    <Textarea 
                      placeholder="Conte mais sobre o que você precisa, qual problema quer resolver, quantos dados tem, etc."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                    Enviar Solicitação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    Ao enviar, você concorda em receber contato por WhatsApp ou e-mail
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="mb-4 flex items-center space-x-2 sm:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">Excel Expert BR</span>
            </div>
            
            <div className="text-center text-sm text-gray-600 sm:text-right">
              <p>© 2025 Excel Expert BR. Todos os direitos reservados.</p>
              <p className="mt-1">Especialista em soluções Excel para empresas brasileiras</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
