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
  phone: "+254 700 000 000",
  whatsapp: "+254700000000",
  location: "Ongata Rongai, Kenya",
  hours: "Mon-Sun: 10AM - 10PM",
  tiktok: "@ngokozinn",
  instagram: "@ngokozinn",
  facebook: "NgokozInn",
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BrandConfig>(() => {
    const saved = localStorage.getItem('brandConfig');
    return saved ? JSON.parse(saved) : defaultConfig;
  });

  useEffect(() => {
    localStorage.setItem('brandConfig', JSON.stringify(config));
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
