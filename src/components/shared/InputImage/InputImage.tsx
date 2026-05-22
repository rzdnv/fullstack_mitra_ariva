"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { Trash2, Upload } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, ReactNode } from "react";

interface Props {
  name: string;
  label?: ReactNode;
  preview?: string;
  className?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  isUploading?: boolean;
  isDeleting?: boolean;
  onUpload?: (file: File) => void;
  onDelete?: () => void;
}

const InputImage = ({
  name,
  label,
  preview,
  className,
  isInvalid,
  errorMessage,
  isUploading,
  isDeleting,
  onUpload,
  onDelete,
}: Props) => {
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="space-y-2">
      {label}

      <div
        className={cn(
          "bg-muted/30 relative flex min-h-52 w-full items-center justify-center overflow-hidden rounded-xl border-2 border-dashed",
          isInvalid && "border-destructive",
          className,
        )}
      >
        {/* PREVIEW */}
        {preview && (
          <>
            <div className="relative h-72 w-full">
              <Image
                src={preview}
                alt="Preview"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <Button
              type="button"
              size="icon"
              disabled={isDeleting}
              onClick={onDelete}
              className="absolute top-3 right-3"
            >
              {isDeleting ? (
                <Spinner className="size-4" />
              ) : (
                <Trash2 className="size-4" />
              )}
            </Button>
          </>
        )}

        {/* EMPTY STATE */}
        {!preview && !isUploading && (
          <label
            htmlFor={name}
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 p-6"
          >
            <Upload className="text-muted-foreground size-10" />

            <div className="space-y-1 text-center">
              <p className="text-sm font-medium">Click to upload image</p>

              <p className="text-muted-foreground text-xs">PNG, JPG, JPEG</p>
            </div>
          </label>
        )}

        {/* LOADING */}
        {isUploading && (
          <div className="flex flex-col items-center justify-center gap-3">
            <Spinner className="size-6" />
            <p className="text-muted-foreground text-sm">Uploading image...</p>
          </div>
        )}

        <input
          id={name}
          name={name}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
          onClick={(e) => {
            e.currentTarget.value = "";
          }}
        />
      </div>

      {/* ERROR */}
      {isInvalid && errorMessage && (
        <p className="text-destructive text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputImage;
