import { useState } from "react";
import type { Material } from "../types/Material";
import type { MaterialFormValues } from "../validations/material.schema";
import type { SetMateriales } from "./types";
import { useCreateMaterial } from "./useCreateMaterial";
import { useChangePriceMaterial } from "./useChangePriceMaterial";

export const useMaterialModal = (setMateriales: SetMateriales) => {
  const { create } = useCreateMaterial(setMateriales);
  const { changePrice } = useChangePriceMaterial(setMateriales);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMaterial, setEditMaterial] = useState<Material | null>(null);

  const openCreate = () => {
    setEditMaterial(null);
    setIsModalOpen(true);
  };

  const openEdit = (material: Material) => {
    setEditMaterial(material);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditMaterial(null);
  };

  const handleSubmit = async (data: MaterialFormValues) => {
    if (editMaterial) {
      await changePrice(editMaterial.id, { currentPrice: data.currentPrice });
    } else {
      await create({ name: data.name, currentPrice: data.currentPrice });
    }
  };

  return {
    isModalOpen,
    editMaterial,
    openCreate,
    openEdit,
    closeModal,
    handleSubmit,
  };
};
