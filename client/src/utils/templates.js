// Resume Templates Configuration
export const RESUME_TEMPLATES = {
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Clean, contemporary design with accent colors',
    thumbnail: '🎨',
    themes: ['blue', 'green', 'red', 'purple', 'gray']
  },
  classic: {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional professional look with timeless appeal',
    thumbnail: '📋',
    themes: ['blue', 'green', 'red', 'purple', 'gray']
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant with focus on content',
    thumbnail: '✨',
    themes: ['blue', 'green', 'red', 'purple', 'gray']
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    description: 'Bold design for creative professionals',
    thumbnail: '🎭',
    themes: ['blue', 'green', 'red', 'purple', 'gray']
  },
  executive: {
    id: 'executive',
    name: 'Executive',
    description: 'Premium layout for executives and leaders',
    thumbnail: '👔',
    themes: ['blue', 'green', 'red', 'purple', 'gray']
  }
};

export const THEME_COLORS = {
  blue: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#42a5f5',
    text: '#333'
  },
  green: {
    primary: '#11998e',
    secondary: '#38ef7d',
    accent: '#4caf50',
    text: '#333'
  },
  red: {
    primary: '#eb3349',
    secondary: '#f45c43',
    accent: '#ef5350',
    text: '#333'
  },
  purple: {
    primary: '#a8edea',
    secondary: '#fed6e3',
    accent: '#ab47bc',
    text: '#333'
  },
  gray: {
    primary: '#2c3e50',
    secondary: '#34495e',
    accent: '#95a5a6',
    text: '#333'
  }
};

export const getTemplateStyle = (template, theme) => {
  const colors = THEME_COLORS[theme] || THEME_COLORS.blue;

  const baseStyles = {
    modern: {
      container: {
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: colors.text,
        backgroundColor: '#fff'
      },
      header: {
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: '#fff',
        padding: '40px 30px',
        borderRadius: '8px',
        marginBottom: '30px',
        boxShadow: `0 4px 15px rgba(102, 126, 234, 0.2)`
      },
      section: {
        marginBottom: '25px',
        paddingBottom: '25px',
        borderBottom: `2px solid ${colors.accent}`
      },
      sectionTitle: {
        fontSize: '18px',
        fontWeight: '700',
        color: colors.primary,
        marginBottom: '15px',
        paddingLeft: '10px',
        borderLeft: `4px solid ${colors.secondary}`
      }
    },
    classic: {
      container: {
        fontFamily: '"Times New Roman", Georgia, serif',
        color: colors.text,
        backgroundColor: '#fff'
      },
      header: {
        borderBottom: `3px solid ${colors.primary}`,
        paddingBottom: '20px',
        marginBottom: '30px'
      },
      section: {
        marginBottom: '25px',
        paddingBottom: '20px',
        borderBottom: `1px solid ${colors.accent}`
      },
      sectionTitle: {
        fontSize: '16px',
        fontWeight: '700',
        color: colors.primary,
        marginBottom: '12px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }
    },
    minimalist: {
      container: {
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: colors.text,
        backgroundColor: '#fff'
      },
      header: {
        padding: '20px 0',
        marginBottom: '20px'
      },
      section: {
        marginBottom: '20px'
      },
      sectionTitle: {
        fontSize: '14px',
        fontWeight: '700',
        color: colors.text,
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }
    },
    creative: {
      container: {
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: colors.text,
        backgroundColor: '#fff'
      },
      header: {
        background: colors.primary,
        color: '#fff',
        padding: '50px 30px',
        marginBottom: '30px',
        textAlign: 'center',
        transform: 'skewY(-2deg)'
      },
      section: {
        marginBottom: '30px',
        paddingLeft: '20px',
        borderLeft: `6px solid ${colors.secondary}`
      },
      sectionTitle: {
        fontSize: '18px',
        fontWeight: '700',
        color: colors.secondary,
        marginBottom: '15px'
      }
    },
    executive: {
      container: {
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: colors.text,
        backgroundColor: '#fafafa'
      },
      header: {
        background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: '#fff',
        padding: '60px 40px',
        marginBottom: '40px'
      },
      section: {
        marginBottom: '30px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      },
      sectionTitle: {
        fontSize: '17px',
        fontWeight: '700',
        color: colors.primary,
        marginBottom: '15px',
        paddingBottom: '10px',
        borderBottom: `2px solid ${colors.accent}`
      }
    }
  };

  return baseStyles[template] || baseStyles.modern;
};
