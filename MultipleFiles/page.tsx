export default function ExcelExpertSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ADICIONE ESTAS DUAS LINHAS:
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', whatsapp: '', email: '', empresa: '', tipoProjeto: '', descricao: ''
  });
