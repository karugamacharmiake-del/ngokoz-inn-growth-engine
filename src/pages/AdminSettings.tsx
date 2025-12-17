import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useBrand } from '@/context/BrandContext';
import { Save, Upload, RotateCcw, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { config, updateConfig, resetConfig } = useBrand();
  const { toast } = useToast();
  const [formData, setFormData] = useState(config);
  const [logoPreview, setLogoPreview] = useState(config.logo);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoPreview(base64String);
        setFormData({ ...formData, logo: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateConfig(formData);
    toast({
      title: "Settings Saved! ✅",
      description: "Brand configuration has been updated successfully.",
    });
  };

  const handleReset = () => {
    resetConfig();
    setFormData(config);
    setLogoPreview(config.logo);
    toast({
      title: "Settings Reset! 🔄",
      description: "Brand configuration has been reset to default.",
    });
  };

  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-black text-3xl md:text-4xl mb-2">
              White-Label <span className="text-gradient">Settings</span>
            </h1>
            <p className="text-muted-foreground">
              Customize your brand identity, contact information, and social media links.
            </p>
          </div>

          {/* Settings Form */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-8">

            {/* Logo Upload */}
            <div>
              <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                Brand Logo
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="logo">Upload Logo</Label>
                  <div className="mt-2">
                    <input
                      type="file"
                      id="logo"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="logo"
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
                    >
                      <Upload className="w-5 h-5" />
                      <span className="text-sm font-medium">Choose Image</span>
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Recommended: Square image, 512x512px, PNG or JPG
                  </p>
                </div>
                <div>
                  <Label>Preview</Label>
                  <div className="mt-2 w-32 h-32 rounded-2xl border-2 border-border overflow-hidden bg-muted flex items-center justify-center">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Brand Identity */}
            <div>
              <h2 className="font-display font-bold text-xl mb-4">Brand Identity</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Business Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g., Ngokoz Inn"
                  />
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={formData.tagline}
                    onChange={(e) => handleInputChange('tagline', e.target.value)}
                    placeholder="e.g., We're Hot & Spicy"
                  />
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Contact Information */}
            <div>
              <h2 className="font-display font-bold text-xl mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+254 759 564 797"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number (without +)</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="254759564797"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location/Address</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="JQ59+QP8, Near Mbabathi Academy..."
                  />
                </div>
                <div>
                  <Label htmlFor="hours">Opening Hours</Label>
                  <Input
                    id="hours"
                    value={formData.hours}
                    onChange={(e) => handleInputChange('hours', e.target.value)}
                    placeholder="Mon-Sun: 8AM - 11PM"
                  />
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Social Media */}
            <div>
              <h2 className="font-display font-bold text-xl mb-4">Social Media</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tiktok">TikTok Handle</Label>
                  <Input
                    id="tiktok"
                    value={formData.tiktok}
                    onChange={(e) => handleInputChange('tiktok', e.target.value)}
                    placeholder="@ngokoz.inn"
                  />
                </div>
                <div>
                  <Label htmlFor="instagram">Instagram Handle</Label>
                  <Input
                    id="instagram"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange('instagram', e.target.value)}
                    placeholder="@ngokoz_"
                  />
                </div>
                <div>
                  <Label htmlFor="facebook">Facebook Page</Label>
                  <Input
                    id="facebook"
                    value={formData.facebook}
                    onChange={(e) => handleInputChange('facebook', e.target.value)}
                    placeholder="NgokozInn"
                  />
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleSave}
                size="lg"
                className="flex-1"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset to Default
              </Button>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 rounded-2xl bg-primary/10 border border-primary/20">
            <p className="text-sm text-foreground">
              <strong>💡 Tip:</strong> Changes are saved to your browser's local storage.
              To make changes permanent across devices, you'll need to update the default configuration in the code.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminSettings;
