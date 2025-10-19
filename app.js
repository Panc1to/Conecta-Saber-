const { createApp } = Vue;

createApp({
    data() {
        return {
            menuActive: false,
            selectedCategory: 'Todos',
            showLogin: false,
            isLoggedIn: false,
            studentName: '',
            showPayment: false,
            selectedCourse: null,
            paymentMethod: 'tarjeta',
            cardForm: {
                number: '',
                expiry: '',
                cvv: '',
                name: ''
            },
            loginForm: {
                email: '',
                password: '',
                remember: false
            },
            categories: ['Todos', 'Programación', 'Diseño', 'Negocios', 'Marketing'],
            courses: [
                {
                    id: 1,
                    title: 'Desarrollo Web Full Stack',
                    description: 'Aprende HTML, CSS, JavaScript y frameworks modernos desde cero',
                    category: 'Programación',
                    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
                    level: 'Intermedio',
                    duration: '40 horas',
                    students: '2,450',
                    price: '$99'
                },
                {
                    id: 2,
                    title: 'Diseño UX/UI Profesional',
                    description: 'Crea interfaces atractivas y experiencias de usuario excepcionales',
                    category: 'Diseño',
                    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
                    level: 'Principiante',
                    duration: '30 horas',
                    students: '1,890',
                    price: '$79'
                },
                {
                    id: 3,
                    title: 'Marketing Digital Avanzado',
                    description: 'Domina SEO, redes sociales y estrategias de crecimiento digital',
                    category: 'Marketing',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
                    level: 'Avanzado',
                    duration: '35 horas',
                    students: '3,120',
                    price: '$89'
                },
                {
                    id: 4,
                    title: 'Python para Data Science',
                    description: 'Análisis de datos, visualización y machine learning con Python',
                    category: 'Programación',
                    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
                    level: 'Intermedio',
                    duration: '50 horas',
                    students: '4,200',
                    price: '$119'
                },
                {
                    id: 5,
                    title: 'Emprendimiento Digital',
                    description: 'Crea y escala tu negocio online desde cero',
                    category: 'Negocios',
                    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
                    level: 'Principiante',
                    duration: '25 horas',
                    students: '2,780',
                    price: '$69'
                },
                {
                    id: 6,
                    title: 'Ilustración Digital',
                    description: 'Técnicas profesionales de ilustración con herramientas digitales',
                    category: 'Diseño',
                    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=250&fit=crop',
                    level: 'Intermedio',
                    duration: '28 horas',
                    students: '1,550',
                    price: '$85'
                }
            ]
        }
    },
    computed: {
        filteredCourses() {
            if (this.selectedCategory === 'Todos') {
                return this.courses;
            }
            return this.courses.filter(course => course.category === this.selectedCategory);
        }
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        },
        closeMenu() {
            this.menuActive = false;
        },
        filterCourses(category) {
            this.selectedCategory = category;
        },
        enrollCourse(course) {
            if (!this.isLoggedIn) {
                alert('Por favor, inicia sesión para inscribirte en cursos');
                this.openLogin();
                return;
            }
            // Abrir modal de pago
            this.selectedCourse = course;
            this.showPayment = true;
        },
        openLogin() {
            this.showLogin = true;
            this.closeMenu();
        },
        closeLogin() {
            this.showLogin = false;
            this.loginForm = {
                email: '',
                password: '',
                remember: false
            };
        },
        login() {
            // Simulación simple de login
            if (this.loginForm.email && this.loginForm.password) {
                // Extraer nombre del email
                const name = this.loginForm.email.split('@')[0];
                this.studentName = name.charAt(0).toUpperCase() + name.slice(1);
                this.isLoggedIn = true;
                
                // Guardar en localStorage si "recordarme" está activado
                if (this.loginForm.remember) {
                    localStorage.setItem('conectaSaberUser', JSON.stringify({
                        name: this.studentName,
                        email: this.loginForm.email
                    }));
                }
                
                this.closeLogin();
                alert(`¡Bienvenido, ${this.studentName}! Has iniciado sesión correctamente.`);
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.studentName = '';
            localStorage.removeItem('conectaSaberUser');
            alert('Has cerrado sesión correctamente');
        },
        showRegisterMessage() {
            alert('La funcionalidad de registro estará disponible próximamente. Por ahora puedes usar cualquier email y contraseña para acceder.');
        },
        selectPaymentMethod(method) {
            this.paymentMethod = method;
        },
        closePayment() {
            this.showPayment = false;
            this.selectedCourse = null;
            this.paymentMethod = 'tarjeta';
            this.cardForm = {
                number: '',
                expiry: '',
                cvv: '',
                name: ''
            };
        },
        processPayment() {
            if (this.paymentMethod === 'tarjeta') {
                // Validar campos de tarjeta
                if (!this.cardForm.number || !this.cardForm.expiry || !this.cardForm.cvv || !this.cardForm.name) {
                    alert('Por favor, completa todos los campos de la tarjeta');
                    return;
                }
            }
            
            // Simular procesamiento de pago
            const paymentMethodText = this.paymentMethod === 'tarjeta' ? 'Tarjeta' : 'PayPal';
            alert(`✅ ¡Pago procesado exitosamente!\n\nMétodo: ${paymentMethodText}\nCurso: ${this.selectedCourse.title}\nMonto: ${this.selectedCourse.price}\n\n¡Bienvenido al curso, ${this.studentName}!`);
            
            this.closePayment();
        },
        checkStoredLogin() {
            const storedUser = localStorage.getItem('conectaSaberUser');
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                this.studentName = userData.name;
                this.isLoggedIn = true;
            }
        }
    },
    mounted() {
        // Verificar si hay sesión guardada
        this.checkStoredLogin();
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}).mount('#app');
