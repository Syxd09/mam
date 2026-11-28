import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { SERVICES, GALLERY, TESTIMONIALS } from "@/lib/site";

export function useSiteConfig() {
  return useQuery({
    queryKey: ["site_config"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_config").select("key, value");
      if (error) throw error;
      return data || [];
    },
    staleTime: 0,
    refetchOnMount: "always",
  });
}

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      if (data && data.length > 0) return data;
      return SERVICES.map((s, i) => ({
        id: i,
        slug: s.slug,
        title: s.title,
        short_desc: s.short,
        description: s.description,
        image_url: s.image,
        benefits: s.benefits,
        industries: s.industries,
      }));
    },
    placeholderData: () =>
      SERVICES.map((s, i) => ({
        id: i,
        slug: s.slug,
        title: s.title,
        short_desc: s.short,
        description: s.description,
        image_url: s.image,
        benefits: s.benefits,
        industries: s.industries,
      })),
    staleTime: 0,
    refetchOnMount: "always",
  });
}

export function useClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("is_visible", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data && data.length > 0 ? data : null;
    },
    staleTime: 0,
    refetchOnMount: "always",
  });
}

export function useCapabilities() {
  return useQuery({
    queryKey: ["capabilities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("capabilities")
        .select("*")
        .eq("is_visible", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data && data.length > 0 ? data : null;
    },
    staleTime: 0,
    refetchOnMount: "always",
  });
}

export function useGalleryPreview() {
  return useQuery({
    queryKey: ["gallery_preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .order("display_order", { ascending: true })
        .limit(12);
      if (error) throw error;
      if (data && data.length > 0) return data;
      return GALLERY.map((g) => ({ image_url: g.src, title: g.title, category: g.cat }));
    },
    placeholderData: () => GALLERY.map((g) => ({ image_url: g.src, title: g.title, category: g.cat })),
    staleTime: 0,
    refetchOnMount: "always",
  });
}

export function useReviews() {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("is_approved", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      if (data && data.length > 0) return data;
      return TESTIMONIALS.map((t, i) => ({
        id: `static-${i}`,
        customer_name: t.name,
        company_name: t.role,
        content: t.quote,
        rating: 5,
      }));
    },
    placeholderData: () =>
      TESTIMONIALS.map((t, i) => ({
        id: `static-${i}`,
        customer_name: t.name,
        company_name: t.role,
        content: t.quote,
        rating: 5,
      })),
    staleTime: 0,
    refetchOnMount: "always",
  });
}
