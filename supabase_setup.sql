-- Ejecutá este SQL en Supabase → SQL Editor → New query

-- Tabla para Autos
create table if not exists fechas_autos (
  id         bigint generated always as identity primary key,
  mes        text not null,
  fecha      text not null,
  efemeride  text not null,
  categoria  text not null,
  idea       text,
  publicado  boolean default false,
  created_at timestamptz default now()
);

-- Tabla para Motos
create table if not exists fechas_motos (
  id         bigint generated always as identity primary key,
  mes        text not null,
  fecha      text not null,
  efemeride  text not null,
  categoria  text not null,
  idea       text,
  publicado  boolean default false,
  created_at timestamptz default now()
);

-- Permisos públicos de lectura y escritura (sin autenticación)
alter table fechas_autos enable row level security;
alter table fechas_motos enable row level security;

create policy "Acceso público autos" on fechas_autos for all using (true) with check (true);
create policy "Acceso público motos" on fechas_motos for all using (true) with check (true);

-- Habilitar tiempo real
alter publication supabase_realtime add table fechas_autos;
alter publication supabase_realtime add table fechas_motos;
