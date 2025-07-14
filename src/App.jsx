import './App.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Home, 
  Building, 
  Palette, 
  Shield,
  Award,
  Users,
  Zap,
  Target,
  MessageCircle
} from 'lucide-react'
import SliderSection from './components/Slider'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
  }

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Forros",
      description: "Forros de alta qualidade para transformar e melhorar o ambiente, combinando estética, funcionalidade e durabilidade.",
      features: ["Isolamento térmico", "Acabamento perfeito", "Instalação rápida"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Divisórias",
      description: "Divisórias versáteis e elegantes, projetadas para otimizar espaços com eficiência e estilo.",
      features: ["Flexibilidade", "Design moderno", "Economia de espaço"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Gesso 3D",
      description: "Gesso 3D para interiores que redefine a estética dos espaços com texturas e relevos sofisticados.",
      features: ["Texturas únicas", "Efeito visual", "Personalização"]
    }
  ]

  const testimonials = [
    {
      name: "Ana Carolina Santos",
      rating: 5,
      text: "Escolhi a Max Gesso para renovar meu lar e fiquei impressionada com a atenção aos detalhes e o resultado final impecável.",
      date: "26 de junho de 2024"
    },
    {
      name: "Marcos Oliveira",
      rating: 5,
      text: "A Max Gesso transformou meu escritório com suas divisórias elegantes e funcionais. O compromisso com a qualidade me conquistou.",
      date: "27 de junho de 2024"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const Formulario = () => {
  const [formData, setFormData] = useState({
    telefone: '',
  });

  // Função para formatar o telefone
  const formatPhoneNumber = (value) => {
    // Remove todos os caracteres que não sejam dígitos
    const cleanedValue = value.replace(/\D/g, '');
    let formattedValue = '';

    // Aplica a máscara com base no tamanho
    if (cleanedValue.length > 0) {
      formattedValue = `(${cleanedValue.substring(0, 2)}`;
    }
    if (cleanedValue.length >= 3) {
      formattedValue += `) ${cleanedValue.substring(2, 7)}`;
    }
    if (cleanedValue.length >= 8) {
      formattedValue += `-${cleanedValue.substring(7, 11)}`;
    }

    // Retorna a string formatada
    return formattedValue;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, telefone: formattedPhone });
  };
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-orange-600"
            >
              Max Gesso
            </motion.div>
            {/* Contato - mobile */} 
              <a href="https://api.whatsapp.com/send?phone=5562982507005" target="_blank">
            <div className="flex md:hidden bg-green-500 p-2 rounded-full items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-600" />
                <span className='text-white'>(62) 9 8250-7005</span>
              </div>
                </a>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-600" />
                <span>(62) 9 8250-7005</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>Seg a Sex 7:00-18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-600" />
                <span>contato@megagessogo.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat 
      bg-[url('assets/images/home-hero.png')]">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Lado esquerdo do conteúdo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        exit={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
          ✨ Especialistas em Gesso e Drywall
        </Badge>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900/50 mb-6 leading-tight">
          Transforme seu
          <span className="text-orange-600/40 block">Ambiente</span>
          com Elegância
        </h1>
        <p className="text-xl text-white mb-8 leading-relaxed">
          Soluções completas em gesso e drywall com design inovador, 
          qualidade superior e acabamento impecável para residências e empresas.
        </p>
        <div className="hidden md:flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-orange-600/40 hover:bg-orange-700 text-white px-8 py-4 text-lg">
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              (62) 9 8250-7005
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Lado direito do conteúdo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Orçamento Gratuito</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Visita técnica sem custo</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Projeto personalizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Garantia de qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
      </section>

      {/* Slider Section */}
      <SliderSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Nossos Serviços</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Que serviço oferecemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em gesso e drywall com a mais alta qualidade e design inovador
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-orange-100 text-orange-800">Por que nos contratar?</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O Max Gesso
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A Max Gesso transforma espaços com sua expertise em design e acabamentos de alto padrão. 
                Cada projeto reflete inovação, qualidade e beleza.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nossa Missão</h3>
                    <p className="text-gray-600">Transformar ambientes através de soluções criativas e de alta qualidade em gesso.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nossa Visão</h3>
                    <p className="text-gray-600">Ser referência nacional em design de interiores com gesso, reconhecida pela excelência.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nossos Valores</h3>
                    <p className="text-gray-600">Integridade, inovação constante, respeito mútuo e responsabilidade social e ambiental.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Projetos Realizados</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9</h3>
                <p className="text-gray-600">Avaliação Média</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Satisfação</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="orcamento" className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Orçamento Rápido</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Economizando seu dinheiro com serviço de qualidade
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Na Max Gesso Designer e Acabamentos, economize sem abrir mão da qualidade. 
                Oferecemos soluções que combinam eficiência financeira com acabamento impecável.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-gray-700 font-medium">Nome Completo</Label>
                        <Input
                          id="nome"
                          placeholder="Ex. João Braga"
                          value={formData.nome}
                          onChange={(e) => setFormData({...formData, nome: e.target.value})}
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="exemplo@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-gray-700 font-medium">Telefone</Label>
                        <Input
                          id="telefone"
                          maxLength="15"
                          placeholder="(xx) xxxxx-xxxx"
                          value={formData.telefone}
                          onChange={(e) => setFormData( {...formData, telefone: e.target.value} )}

                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="servico" className="text-gray-700 font-medium">Selecione Serviços</Label>
                        <Select value={formData.servico} onValueChange={(value) => setFormData({...formData, servico: value})}>
                          <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                            <SelectValue placeholder="Escolha um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="forros">Forros</SelectItem>
                            <SelectItem value="divisorias">Divisórias</SelectItem>
                            <SelectItem value="gesso3d">Gesso 3D</SelectItem>
                            <SelectItem value="sancas">Sancas</SelectItem>
                            <SelectItem value="revestimento">Revestimento Gesso Liso</SelectItem>
                            <SelectItem value="molduras">Molduras</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold"
                      >
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Enviar Mensagem
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800">Depoimentos</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O que nossos clientes dizem
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Max Gesso</h3>
              <p className="text-gray-300 mb-4">
                Transformando espaços com elegância e sofisticação através de soluções inovadoras em gesso e drywall.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Forro de Acantonado - Drywall</li>
                <li>Divisórias</li>
                <li>Forro Mineral</li>
                <li>Sancas</li>
                <li>Cimentícios</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(62) 9 8250-7005</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@megagessogo.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Seg a Sex 7:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Max Gesso. Todos os Direitos Reservados</p>
          </div>
        </div>
      </footer>

      {/* Botão de WhatsApp fixo */}
      <div className="fixed bottom-10 right-10 z-50 animate-pulse">
        <motion.a
          href="https://api.whatsapp.com/send?phone=5562982507005"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
        >
          <Phone className="w-8 h-8" />
        </motion.a>
      </div>
    </div>
  )
}

export default App

