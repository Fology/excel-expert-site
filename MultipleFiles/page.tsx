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
import emailjs from '@emailjs/browser'; // Certifique-se de que esta linha está aqui

    export default function ExcelExpertSite() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      // ESTAS DUAS LINHAS SÃO CRUCIAIS E DEVEM ESTAR AQUI:
      const [isLoading, setIsLoading] = useState(false);
      const [formData, setFormData] = useState({
        nome: '', whatsapp: '', email: '', empresa: '', tipoProjeto: '', descricao: ''
      });

      // Função para atualizar os campos do formulário
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.tipoProjeto || !formData.descricao) {
      alert('Por favor, preencha todos os campos obrigatórios (*)');
      return;
    }

    setIsLoading(true);

    try {
      console.log('🔄 Iniciando envio...');

      // Inicializar EmailJS com a chave pública da variável de ambiente
      // Certifique-se de que NEXT_PUBLIC_EMAILJS_PUBLIC_KEY esteja definido no Netlify
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

      // Dados EXATAMENTE como no seu template do EmailJS
      const templateParams = {
        from_name: formData.nome || 'Não informado',
        name: formData.nome || 'Não informado',
        from_email: formData.email || 'Não informado',
        whatsapp: formData.whatsapp || 'Não informado',
        empresa: formData.empresa || 'Não informado',
        tipo_projeto: formData.tipoProjeto || 'Não informado',
        descricao: formData.descricao || 'Não informado',
        reply_to: formData.email || 'Não informado'
      };

      console.log('📤 Enviando com parâmetros:', templateParams);

      // Enviar email usando as variáveis de ambiente
      // Certifique-se de que NEXT_PUBLIC_EMAILJS_SERVICE_ID e NEXT_PUBLIC_EMAILJS_TEMPLATE_ID estejam definidos no Netlify
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      console.log('✅ Email enviado:', result);
      alert('✅ Proposta enviada com sucesso! Você receberá uma resposta em breve.');

      // Limpar formulário após o envio bem-sucedido
      setFormData({
        nome: '', whatsapp: '', email: '', empresa: '', tipoProjeto: '', descricao: ''
      });

    } catch (error: any) {
      console.error('❌ Erro completo:', error);
      alert(`❌ Erro: ${error.text || error.message || 'Erro desconhecido'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // SEUS DADOS - Serviços
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

  // SEUS DADOS - Trabalhos/Portfolio
  const trabalhos = [
    {
      titulo: "Planilha Para Empresa Química",
      categoria: "Química",
      descricao: "Planilha que auxilia no planejamento de lotes, comparação, exibição de resultados e acompanhamento diário dos resultados.",
      resultados: [
        "Diminuição do tempo de planejamento de 3 dias para 1 dia",
        "Redução de 60% no tempo de análise",
        "Melhor controle e acompanhamento de todos os produtos"
      ]
    },
    {
      titulo: "Cadastro e Relatórios de Paradas",
      categoria: "Manutenção",
      descricao: "Sistema automatizado de cadastro de paradas de áreas e criação de um relatório com dashboards.",
      resultados: [
        "Retirada a necessidade de usar cadernos para acompanhar paradas de áreas",
        "Melhor controle dos equipamentos críticos",
        "Relatórios automáticos para diretoria"
      ]
    },
    {
      titulo: "Análise de Produção - Britagem de Minérios",
      categoria: "Britagem",
      descricao: "Planilha de controle que cadastra cada material processado e geração de ralatórios de toda etapa produtiva.",
      resultados: [
        "Redução no estoque parado",
        "Otimização e visualização dos dados de todo material processado",
        "Relatórios que auxiliam em ver desvios de produção o que diminuiu a ociosidade em 25%"
      ]
    }
  ];

  // SEUS DADOS - Depoimentos
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

  // SUAS ESTATÍSTICAS
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
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Excel Expert BR</h1>
            </div>

            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#servicos" className="text-gray-700 hover:text-green-600">
                  Serviços
                </a>
                <a href="#trabalhos" className="text-gray-700 hover:text-green-600">
                  Portfolio
                </a>
                <a href="#depoimentos" className="text-gray-700 hover:text-green-600">
                  Depoimentos
                </a>
                <a href="#contato" className="text-gray-700 hover:text-green-600">
                  Contato
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  const phoneNumber = "5531984568339"; // ← SUBSTITUA pelo seu número
                  const message = "Olá! Vi seu site e gostaria de saber mais sobre seus serviços de Excel.";
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>

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
              <div className="space-y-1 border-t border-gray-200 px-2 pb-3 pt-2">
                <a href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Serviços
                </a>
                <a href="#trabalhos" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Portfolio
                </a>
                <a href="#depoimentos" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Depoimentos
                </a>
                <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                  Contato
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transforme Seus Dados em{' '}
              <span className="text-green-600">Decisões Inteligentes</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Especialista em Excel com mais de 5 anos de experiência criando
              soluções personalizadas para empresas brasileiras. Dashboards,
              automações e análises que geram resultados reais.
            </p>

            {/* Botões funcionais */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  const element = document.getElementById('trabalhos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ver Meus Trabalhos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const phoneNumber = "5531984568339"; // ← SUBSTITUA pelo seu número
                  const message = "Olá! Vi seu site e gostaria de saber mais sobre seus serviços de Excel.";
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>

            {/* Estatísticas */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
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

      {/* Seção de Serviços */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Serviços Especializados
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Soluções personalizadas em Excel para transformar seus dados em insights valiosos
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
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed text-gray-600">
                    {servico.descricao}
                  </CardDescription>
                  <div className="text-lg font-semibold text-green-600">
                    {servico.preco}
                  </div>
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
            {/* CARD 1 - Empresa Química */}
            <Card className="border-gray-200">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                  alt="Dashboard com gráficos para indústria química mostrando controle de lotes e planejamento"
                  className="h-48 w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Química
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Planilha Para Empresa Química
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed text-gray-600">
                  Planilha que auxilia no planejamento de lotes, comparação, exibição de resultados e acompanhamento diário dos resultados.
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Resultados Alcançados:</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Diminuição do tempo de planejamento de 3 dias para 1 dia
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Redução de 60% no tempo de análise
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Melhor controle e acompanhamento de todos os produtos
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CARD 2 - Cadastro de Paradas */}
            <Card className="border-gray-200">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
                  alt="Sistema de controle de manutenção com dashboards para acompanhamento de equipamentos"
                  className="h-48 w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                  Manutenção
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Cadastro e Relatórios de Paradas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed text-gray-600">
                  Sistema automatizado de cadastro de paradas de áreas e criação de um relatório com dashboards.
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Resultados Alcançados:</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Retirada a necessidade de usar cadernos para acompanhar paradas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Melhor controle dos equipamentos críticos
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Relatórios automáticos para diretoria
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CARD 3 - Britagem de Minérios */}
            <Card className="border-gray-200">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop"
                  alt="Análise de dados de produção industrial com gráficos de performance e controle de materiais"
                  className="h-48 w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                  Britagem
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Análise de Produção - Britagem de Minérios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed text-gray-600">
                  Planilha de controle que cadastra cada material processado e geração de relatórios de toda etapa produtiva.
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Resultados Alcançados:</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Redução no estoque parado
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Otimização e visualização dos dados processados
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                    Diminuição da ociosidade em 25%
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Depoimentos dos Clientes
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Veja o que meus clientes falam sobre os resultados alcançados
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
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

      {/* Formulário para Netlify */}
      <section id="contato" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Solicite Seu Orçamento
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Preencha o formulário e receba uma proposta personalizada por email
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Formulário de Contato
                </CardTitle>
                <CardDescription>
                  Preencha todos os campos para receber uma proposta detalhada
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* FORMULÁRIO ATIVADO PARA NETLIFY FORMS */}
                <form
                  name="contato-excel"
                  method="POST"
                  data-netlify="true"
                  action="/obrigado"
                  className="space-y-4"
                  onSubmit={handleSubmit} // Adicionado o manipulador de envio
                >
                  <input type="hidden" name="form-name" value="contato-excel" />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Nome Completo *
                      </label>
                      <Input
                        name="nome"
                        placeholder="Digite seu nome completo"
                        required
                        value={formData.nome} // Vinculado ao estado
                        onChange={handleInputChange} // Adicionado o manipulador de mudança
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        WhatsApp
                      </label>
                      <Input
                        name="whatsapp"
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp} // Vinculado ao estado
                        onChange={handleInputChange} // Adicionado o manipulador de mudança
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email} // Vinculado ao estado
                      onChange={handleInputChange} // Adicionado o manipulador de mudança
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <Input
                      name="empresa"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa} // Vinculado ao estado
                      onChange={handleInputChange} // Adicionado o manipulador de mudança
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Tipo de Projeto *
                    </label>
                    <select
                      name="tipoProjeto"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      required
                      value={formData.tipoProjeto} // Vinculado ao estado
                      onChange={handleInputChange} // Adicionado o manipulador de mudança
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      <option value="Dashboard Profissional">Dashboard Profissional</option>
                      <option value="Automação de Planilhas">Automação de Planilhas</option>
                      <option value="Análise de Dados">Análise de Dados</option>
                      <option value="Relatório Gerencial">Relatório Gerencial</option>
                      <option value="Controle Financeiro">Controle Financeiro</option>
                      <option value="Gestão de Equipes">Gestão de Equipes</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Descreva seu projeto *
                    </label>
                    <Textarea
                      name="descricao"
                      placeholder="Descreva detalhadamente o que você precisa: qual problema quer resolver, que tipo de dados tem, quantas pessoas vão usar, prazo desejado, etc."
                      rows={5}
                      required
                      value={formData.descricao} // Vinculado ao estado
                      onChange={handleInputChange} // Adicionado o manipulador de mudança
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 text-white hover:bg-green-700"
                    disabled={isLoading} // Desabilita o botão durante o envio
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Proposta'} {/* Muda o texto do botão */}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    * Campos obrigatórios. Você receberá uma resposta por email em até 24h.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-900">Excel Expert BR</h3>
              <p className="mb-4 text-gray-600">
                Especialista em soluções Excel para empresas brasileiras.
                Transformamos seus dados em decisões inteligentes.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const phoneNumber = "5531984568339"; // ← SUBSTITUA pelo seu número
                    const message = "Olá! Vi seu site e gostaria de saber mais sobre seus serviços.";
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#servicos" className="text-gray-600 hover:text-green-600">Dashboards</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-green-600">Automação</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-green-600">Análise de Dados</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-green-600">Relatórios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Phone className="mr-2 h-4 w-4" />
                  (31) 984568339
                </li>
                <li className="flex items-center text-gray-600">
                  <Mail className="mr-2 h-4 w-4" />
                  gabrielfrancisco.12@hotmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
            <p className="text-sm text-gray-600">
              © 2024 Excel Expert BR. Todos os direitos reservados.
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Feito com ❤️ para empresas brasileiras
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
