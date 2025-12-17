import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BrandConfig {
  name: string;
  tagline: string;
  logo: string;
  favicon: string;
  phone: string;
  whatsapp: string;
  location: string;
  hours: string;
  tiktok: string;
  instagram: string;
  facebook: string;
}

interface BrandContextType {
  config: BrandConfig;
  updateConfig: (updates: Partial<BrandConfig>) => void;
  resetConfig: () => void;
}

const defaultConfig: BrandConfig = {
  name: "Ngokoz Inn",
  tagline: "We're Hot & Spicy. Literally!!",
  logo: "/logo.png",
  favicon: "/favicon.ico",
  phone: "+254 759 564 797",
  whatsapp: "254759564797",
  location: "JQ59+QP8, Near Mbabathi Academy, Off Magadi Road, Rongai, Nairobi",
  hours: "Mon-Sun: 8AM - 11PM",
  tiktok: "@ngokoz.inn",
  instagram: "@ngokoz_",
  facebook: "NgokozInn",
};

const CONFIG_VERSION = '2.0'; // Increment to force refresh

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BrandConfig>(() => {
    const saved = localStorage.getItem('brandConfig');
    const savedVersion = localStorage.getItem('brandConfigVersion');

    // If version changed or no version, use default config
    if (!saved || savedVersion !== CONFIG_VERSION) {
      localStorage.setItem('brandConfigVersion', CONFIG_VERSION);
      localStorage.setItem('brandConfig', JSON.stringify(defaultConfig));
      return defaultConfig;
    }

    return JSON.parse(saved);
  });

  useEffect(() => {
    localStorage.setItem('brandConfig', JSON.stringify(config));
    localStorage.setItem('brandConfigVersion', CONFIG_VERSION);
    document.title = config.name;
  }, [config]);

  const updateConfig = (updates: Partial<BrandConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    localStorage.removeItem('brandConfig');
  };

  return (
    <BrandContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
