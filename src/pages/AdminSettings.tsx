import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, RotateCcw, ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrand } from '@/context/BrandContext';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { config, updateConfig, resetConfig } = useBrand();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: config.name,
    tagline: config.tagline,
    phone: config.phone,
    whatsapp: config.whatsapp,
    location: config.location,
    hours: config.hours,
    tiktok: config.tiktok,
    instagram: config.instagram,
    facebook: config.facebook,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateConfig(formData);
    toast({
      title: "Settings Saved! ✅",
      description: "Your brand settings have been updated.",
    });
  };

  const handleReset = () => {
    resetConfig();
    setFormData({
      name: "Ngokoz Inn",
      tagline: "We're Hot & Spicy. Literally!!",
      phone: "+254 700 000 000",
      whatsapp: "+254700000000",
      location: "Ongata Rongai, Kenya",
      hours: "Mon-Sun: 10AM - 10PM",
      tiktok: "@ngokozinn",
      instagram: "@ngokozinn",
      facebook: "NgokozInn",
    });
    toast({
      title: "Settings Reset",
      description: "Brand settings restored to default.",
    });
  };

  const fields = [
    { name: 'name', label: 'Restaurant Name', placeholder: 'e.g., Ngokoz Inn' },
    { name: 'tagline', label: 'Tagline', placeholder: "e.g., We're Hot & Spicy!" },
    { name: 'phone', label: 'Phone Number', placeholder: '+254 700 000 000' },
    { name: 'whatsapp', label: 'WhatsApp (no spaces)', placeholder: '+254700000000' },
    { name: 'location', label: 'Location', placeholder: 'City, Country' },
    { name: 'hours', label: 'Opening Hours', placeholder: 'Mon-Sun: 10AM - 10PM' },
    { name: 'tiktok', label: 'TikTok Handle', placeholder: '@yourbrand' },
    { name: 'instagram', label: 'Instagram Handle', placeholder: '@yourbrand' },
    { name: 'facebook', label: 'Facebook Page', placeholder: 'YourBrand' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display font-bold text-lg">Brand Settings</h1>
              <p className="text-xs text-muted-foreground">Admin Only</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
            <Shield className="w-4 h-4" /> Admin
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Info Banner */}
          <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
            <p className="text-sm text-foreground">
              <strong>White-Label Mode:</strong> Update the brand settings below to customize this 
              website for a different restaurant. All text throughout the site will update automatically.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.name} className="p-4 rounded-2xl bg-card border border-border">
                <label className="block font-semibold text-foreground mb-2">
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="hero" size="lg" onClick={handleSave} className="flex-1">
              <Save className="w-5 h-5" /> Save Changes
            </Button>
            <Button variant="outline" size="lg" onClick={handleReset}>
              <RotateCcw className="w-5 h-5" /> Reset to Default
            </Button>
          </div>

          {/* Preview */}
          <div className="mt-12">
            <h2 className="font-display font-bold text-xl text-foreground mb-4">Live Preview</h2>
            <div className="p-6 rounded-3xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full brand-gradient flex items-center justify-center">
                  <span className="text-2xl">🍗</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">{formData.name}</h3>
                  <p className="text-muted-foreground">{formData.tagline}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 rounded-lg bg-muted">
                  <span className="text-muted-foreground">📍</span> {formData.location}
                </div>
                <div className="p-2 rounded-lg bg-muted">
                  <span className="text-muted-foreground">📞</span> {formData.phone}
                </div>
                <div className="p-2 rounded-lg bg-muted">
                  <span className="text-muted-foreground">🕐</span> {formData.hours}
                </div>
                <div className="p-2 rounded-lg bg-muted">
                  <span className="text-muted-foreground">📱</span> {formData.tiktok}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Changes are saved to browser storage and will persist across sessions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
