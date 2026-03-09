import { useState, useEffect, useRef } from 'react'
import { supabase } from './supabase'
import { DATA_AUTOS, DATA_MOTOS } from './data'

// ── Icons ─────────────────────────────────────────────────────────────────────
const EditIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
const TrashIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
const SearchIcon= () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
const PlusIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>

const JackLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50 L38 10 L62 10 Z" fill="#C0111A"/>
    <path d="M50 50 L85 28 L72 50 Z" fill="#C0111A"/>
    <path d="M50 50 L90 62 L72 80 Z" fill="#C0111A"/>
    <path d="M50 50 L62 90 L38 90 Z" fill="#C0111A"/>
    <path d="M50 50 L15 72 L28 50 Z" fill="#C0111A"/>
    <path d="M50 50 L10 38 L28 20 Z" fill="#C0111A"/>
    <circle cx="50" cy="50" r="14" fill="white"/>
  </svg>
)

const CAT = {
  NAC:  { label:'Nacional',     color:'#1D9B4A', bg:'#E8F8EE' },
  MKT:  { label:'Comercial',    color:'#B5620A', bg:'#FEF3E2' },
  AUTO: { label:'Automotor',    color:'#0066CC', bg:'#E5F0FB' },
  MOTO: { label:'Motociclismo', color:'#9B1D6A', bg:'#F8E8F4' },
}

const MESES = ['Todos','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

// ── Sheet modal ───────────────────────────────────────────────────────────────
function Sheet({ title, row, tab, onSave, onClose }) {
  const [val, setVal] = useState(row ?? { mes:'Enero', fecha:'', efemeride:'', categoria: tab==='motos'?'MOTO':'AUTO', idea:'' })
  const cats = tab === 'motos'
    ? { NAC:'Nacional', MKT:'Comercial', MOTO:'Motociclismo' }
    : { NAC:'Nacional', MKT:'Comercial', AUTO:'Automotor' }

  const S   = { width:'100%', background:'#F5F5F7', border:'1px solid #E5E5EA', borderRadius:10, padding:'11px 13px', color:'#1C1C1E', fontSize:15, fontFamily:'inherit', outline:'none', boxSizing:'border-box' }
  const Sel = { ...S, appearance:'none', WebkitAppearance:'none' }

  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()}
      style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.28)', backdropFilter:'blur(12px)', zIndex:200, display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
      <div style={{ background:'#fff', borderRadius:'20px 20px 0 0', width:'100%', maxWidth:640, maxHeight:'92dvh', overflowY:'auto', animation:'sheetUp .28s cubic-bezier(.32,1,.28,1)' }}>
        <div style={{ position:'sticky', top:0, background:'#fff', padding:'10px 20px 0', borderBottom:'1px solid #F2F2F7', zIndex:1 }}>
          <div style={{ width:36, height:4, background:'#D1D1D6', borderRadius:2, margin:'0 auto 14px' }}/>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:14 }}>
            <span style={{ fontSize:17, fontWeight:600, color:'#1C1C1E', letterSpacing:'-.3px' }}>{title}</span>
            <button onClick={onClose} style={{ background:'#F2F2F7', border:'none', borderRadius:'50%', width:28, height:28, color:'#6E6E73', fontSize:13, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
          </div>
        </div>
        <div style={{ padding:'18px 20px 48px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 12px' }}>
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:11, fontWeight:600, color:'#8E8E93', marginBottom:5, letterSpacing:'.4px', textTransform:'uppercase' }}>Mes</div>
              <select value={val.mes} onChange={e=>setVal({...val,mes:e.target.value})} style={Sel}>{MESES.slice(1).map(m=><option key={m}>{m}</option>)}</select>
            </div>
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:11, fontWeight:600, color:'#8E8E93', marginBottom:5, letterSpacing:'.4px', textTransform:'uppercase' }}>Fecha (dd/mm)</div>
              <input value={val.fecha} onChange={e=>setVal({...val,fecha:e.target.value})} placeholder="15/04" style={S}/>
            </div>
          </div>
          <div style={{ marginBottom:14 }}>
            <div style={{ fontSize:11, fontWeight:600, color:'#8E8E93', marginBottom:5, letterSpacing:'.4px', textTransform:'uppercase' }}>Efeméride</div>
            <input value={val.efemeride} onChange={e=>setVal({...val,efemeride:e.target.value})} placeholder="Nombre del evento" style={S}/>
          </div>
          <div style={{ marginBottom:14 }}>
            <div style={{ fontSize:11, fontWeight:600, color:'#8E8E93', marginBottom:5, letterSpacing:'.4px', textTransform:'uppercase' }}>Categoría</div>
            <select value={val.categoria} onChange={e=>setVal({...val,categoria:e.target.value})} style={Sel}>
              {Object.entries(cats).map(([k,v])=><option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, fontWeight:600, color:'#8E8E93', marginBottom:5, letterSpacing:'.4px', textTransform:'uppercase' }}>Idea de contenido</div>
            <textarea value={val.idea} onChange={e=>setVal({...val,idea:e.target.value})} placeholder="Copy sugerido para redes sociales..." rows={3}
              style={{ ...S, resize:'none', lineHeight:1.55 }}/>
          </div>
          <button onClick={()=>val.efemeride.trim()&&onSave(val)}
            style={{ width:'100%', background:'#007AFF', border:'none', borderRadius:13, padding:'14px', color:'#fff', fontSize:16, fontWeight:600, fontFamily:'inherit', cursor:'pointer', letterSpacing:'-.2px' }}>
            {row ? 'Guardar cambios' : 'Agregar fecha'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────
function Card({ row, onEdit, onToggle, onDelete }) {
  const cat = CAT[row.categoria] || CAT.MKT
  return (
    <div style={{ background:'#fff', borderRadius:14, padding:'14px 16px', marginBottom:8, boxShadow:'0 1px 4px rgba(0,0,0,.06)', opacity:row.publicado?.58:1, transition:'opacity .2s' }}>
      <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5, paddingTop:3, minWidth:34 }}>
          <div style={{ width:7, height:7, borderRadius:'50%', background:cat.color, flexShrink:0 }}/>
          <span style={{ fontSize:10, color:'#AEAEB2', fontWeight:600, letterSpacing:'.2px', textAlign:'center', lineHeight:1.2 }}>{row.fecha}</span>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:15, fontWeight:600, color:'#1C1C1E', letterSpacing:'-.2px', lineHeight:1.35, marginBottom:4 }}>{row.efemeride}</div>
          <span style={{ display:'inline-block', fontSize:11, fontWeight:600, color:cat.color, background:cat.bg, padding:'2px 8px', borderRadius:6, letterSpacing:'.2px', marginBottom:6 }}>{cat.label}</span>
          <p style={{ fontSize:13, color:'#6E6E73', lineHeight:1.55, margin:0 }}>{row.idea}</p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:5, flexShrink:0 }}>
          <button title="Editar" onClick={()=>onEdit(row)}
            style={{ width:32, height:32, borderRadius:9, border:'1px solid #E5E5EA', background:'#F9F9F9', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#6E6E73' }}>
            <EditIcon/>
          </button>
          <button title={row.publicado?'Desmarcar':'Marcar como publicado'} onClick={()=>onToggle(row.id)}
            style={{ width:32, height:32, borderRadius:9, border:`1.5px solid ${row.publicado?'#1D9B4A':'#E5E5EA'}`, background:row.publicado?'#E8F8EE':'#F9F9F9', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:row.publicado?'#1D9B4A':'#AEAEB2', transition:'all .15s' }}>
            <CheckIcon/>
          </button>
          <button title="Eliminar" onClick={()=>onDelete(row.id)}
            style={{ width:32, height:32, borderRadius:9, border:'1px solid #E5E5EA', background:'#F9F9F9', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#C0392B' }}>
            <TrashIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Tab View ──────────────────────────────────────────────────────────────────
function TabView({ tab, accent }) {
  const TABLE = tab === 'autos' ? 'fechas_autos' : 'fechas_motos'
  const SEED  = tab === 'autos' ? DATA_AUTOS : DATA_MOTOS

  const [rows, setRows]       = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter]   = useState('Todos')
  const [catF, setCatF]       = useState('Todos')
  const [search, setSearch]   = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [editing, setEditing] = useState(null)
  const [adding, setAdding]   = useState(false)
  const [toast, setToast]     = useState(null)
  const searchRef = useRef(null)

  const flash = m => { setToast(m); setTimeout(()=>setToast(null), 2000) }

  // Load + seed if empty
  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const { data, error } = await supabase.from(TABLE).select('*').order('id')
      if (error) { console.error(error); setLoading(false); return }
      if (data.length === 0) {
        // Seed initial data
        const toInsert = SEED.map(r => ({ ...r, publicado: false }))
        const { data: inserted } = await supabase.from(TABLE).insert(toInsert).select()
        setRows(inserted || [])
      } else {
        setRows(data)
      }
      setLoading(false)
    }
    load()

    // Real-time subscription
    const channel = supabase
      .channel(`${TABLE}_changes`)
      .on('postgres_changes', { event: '*', schema: 'public', table: TABLE }, payload => {
        if (payload.eventType === 'INSERT') setRows(r => [...r, payload.new])
        if (payload.eventType === 'UPDATE') setRows(r => r.map(x => x.id === payload.new.id ? payload.new : x))
        if (payload.eventType === 'DELETE') setRows(r => r.filter(x => x.id !== payload.old.id))
      })
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [TABLE])

  const saveEdit = async (val) => {
    const { error } = await supabase.from(TABLE).update(val).eq('id', val.id)
    if (!error) { setEditing(null); flash('Cambios guardados') }
  }

  const saveNew = async (val) => {
    const { error } = await supabase.from(TABLE).insert({ ...val, publicado: false })
    if (!error) { setAdding(false); flash('Fecha agregada') }
  }

  const toggle = async (id) => {
    const row = rows.find(r => r.id === id)
    await supabase.from(TABLE).update({ publicado: !row.publicado }).eq('id', id)
  }

  const del = async (id) => {
    await supabase.from(TABLE).delete().eq('id', id)
    flash('Eliminado')
  }

  const cats = tab === 'motos'
    ? { NAC:'Nacional', MKT:'Comercial', MOTO:'Motociclismo' }
    : { NAC:'Nacional', MKT:'Comercial', AUTO:'Automotor' }

  const filtered = rows.filter(r =>
    (filter==='Todos'||r.mes===filter) &&
    (catF==='Todos'||r.categoria===catF) &&
    (!search||r.efemeride?.toLowerCase().includes(search.toLowerCase())||r.idea?.toLowerCase().includes(search.toLowerCase()))
  )
  const grouped = filtered.reduce((a,r)=>{ (a[r.mes]??=[]).push(r); return a },{})
  const done = rows.filter(r=>r.publicado).length
  const pct  = rows.length ? Math.round((done/rows.length)*100) : 0

  return (
    <div>
      <div style={{ background:'rgba(245,245,247,.95)', borderBottom:'1px solid #E5E5EA' }}>
        <div style={{ maxWidth:720, margin:'0 auto', padding:'10px 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
            <div style={{ display:'flex', gap:8 }}>
              <button onClick={()=>{ setShowSearch(s=>!s); if(!showSearch) setTimeout(()=>searchRef.current?.focus(),80) }}
                style={{ background:'#E5E5EA', border:'none', borderRadius:10, width:36, height:36, cursor:'pointer', color:'#6E6E73', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <SearchIcon/>
              </button>
              <button onClick={()=>setAdding(true)}
                style={{ background:accent, border:'none', borderRadius:10, height:36, padding:'0 14px', color:'#fff', fontSize:13, fontWeight:600, fontFamily:'inherit', cursor:'pointer', display:'flex', alignItems:'center', gap:5 }}>
                <PlusIcon/> Agregar fecha
              </button>
            </div>
            <span style={{ fontSize:12, color:'#8E8E93', fontWeight:500 }}>{done}/{rows.length} publicadas · {pct}%</span>
          </div>
          <div style={{ height:3, background:'#E5E5EA', borderRadius:2 }}>
            <div style={{ height:'100%', width:`${pct}%`, background:accent, borderRadius:2, transition:'width .5s ease' }}/>
          </div>
          {showSearch && (
            <div style={{ marginTop:10 }}>
              <input ref={searchRef} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar efeméride o idea…"
                style={{ width:'100%', background:'#fff', border:'1px solid #E5E5EA', borderRadius:11, padding:'10px 14px', fontSize:15, fontFamily:'inherit', outline:'none', color:'#1C1C1E' }}/>
            </div>
          )}
        </div>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <div className="scroll-x">
            {MESES.map(m=>(
              <button key={m} className="chip"
                style={{ background:filter===m?accent:'#E5E5EA', color:filter===m?'#fff':'#6E6E73' }}
                onClick={()=>setFilter(m)}>{m}</button>
            ))}
          </div>
          <div style={{ display:'flex', gap:6, padding:'2px 16px 10px', flexWrap:'wrap' }}>
            {[['Todos','Todas'], ...Object.entries(cats)].map(([k,lbl])=>{
              const v = CAT[k]
              const active = catF===k
              return (
                <button key={k} className="chip"
                  style={{ background:active?(v?v.bg:accent):'#E5E5EA', color:active?(v?v.color:'#fff'):'#6E6E73', border:active&&v?`1.5px solid ${v.color}55`:'1.5px solid transparent' }}
                  onClick={()=>setCatF(k)}>{lbl}</button>
              )
            })}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:720, margin:'0 auto', padding:'12px 16px 100px' }}>
        {loading
          ? <div style={{ textAlign:'center', padding:'60px 0', color:'#8E8E93' }}>
              <div style={{ fontSize:32, marginBottom:12 }}>⏳</div>
              <div style={{ fontSize:15 }}>Cargando fechas…</div>
            </div>
          : Object.keys(grouped).length===0
          ? <div style={{ textAlign:'center', padding:'64px 0', color:'#AEAEB2' }}>
              <div style={{ fontSize:44, marginBottom:12 }}>{tab==='motos'?'🏍️':'🚗'}</div>
              <div style={{ fontSize:16, fontWeight:500, color:'#6E6E73' }}>Sin resultados</div>
              <div style={{ fontSize:13, marginTop:5 }}>Probá con otro filtro</div>
            </div>
          : Object.entries(grouped).map(([mes,items])=>(
              <div key={mes}>
                <div style={{ fontSize:12, fontWeight:700, color:'#8E8E93', letterSpacing:'.7px', textTransform:'uppercase', padding:'18px 2px 8px' }}>{mes}</div>
                {items.map(row=><Card key={row.id} row={row} onEdit={setEditing} onToggle={toggle} onDelete={del}/>)}
              </div>
            ))
        }
      </div>

      {editing && <Sheet title="Editar efeméride" row={editing} tab={tab} onSave={saveEdit} onClose={()=>setEditing(null)}/>}
      {adding  && <Sheet title="Nueva efeméride"  row={null}    tab={tab} onSave={saveNew}  onClose={()=>setAdding(false)}/>}

      {toast && (
        <div style={{ position:'fixed', bottom:32, left:'50%', transform:'translateX(-50%)', background:'rgba(28,28,30,.94)', backdropFilter:'blur(16px)', color:'#fff', padding:'10px 22px', borderRadius:22, fontSize:14, fontWeight:500, zIndex:300, animation:'toastIn .2s cubic-bezier(.32,1,.28,1)', whiteSpace:'nowrap', boxShadow:'0 8px 32px rgba(0,0,0,.15)', letterSpacing:'-.1px' }}>
          {toast}
        </div>
      )}
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState('autos')

  const tabs = [
    { key:'autos', label:'Autos', icon:'🚗', accent:'#007AFF' },
    { key:'motos', label:'Motos', icon:'🏍️', accent:'#9B1D6A' },
  ]

  return (
    <div style={{ minHeight:'100dvh', background:'#F5F5F7', fontFamily:"-apple-system,'SF Pro Display',Helvetica,sans-serif", color:'#1C1C1E', WebkitFontSmoothing:'antialiased' }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{height:4px;width:4px;}
        ::-webkit-scrollbar-thumb{background:#D1D1D6;border-radius:2px;}
        @keyframes sheetUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        @keyframes toastIn{from{transform:translateX(-50%) translateY(8px) scale(.95);opacity:0}to{transform:translateX(-50%) translateY(0) scale(1);opacity:1}}
        button{-webkit-tap-highlight-color:transparent;transition:opacity .12s,transform .1s;}
        button:hover{opacity:.8;}
        button:active{opacity:.6;transform:scale(.97);}
        input,textarea,select{-webkit-appearance:none;}
        .scroll-x{display:flex;gap:6px;overflow-x:auto;padding:9px 16px;scrollbar-width:none;}
        .scroll-x::-webkit-scrollbar{display:none;}
        .chip{display:inline-flex;align-items:center;padding:7px 15px;border-radius:20px;font-size:13px;font-weight:500;border:1.5px solid transparent;cursor:pointer;white-space:nowrap;font-family:inherit;transition:background .15s,color .15s;}
      `}</style>

      {/* Header */}
      <div style={{ position:'sticky', top:0, zIndex:100, background:'rgba(245,245,247,.94)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderBottom:'1px solid #E5E5EA' }}>
        <div style={{ maxWidth:720, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', alignItems:'center', height:58 }}>
            <div>
              <div style={{ fontSize:20, fontWeight:700, letterSpacing:'-.5px', lineHeight:1.15 }}>Grupo Jack</div>
              <div style={{ fontSize:13, color:'#8E8E93', letterSpacing:'-.1px', marginTop:1 }}>Calendario de Efemérides 2026</div>
            </div>
          </div>
          <div style={{ display:'flex', gap:2, background:'#E5E5EA', borderRadius:12, padding:3, marginBottom:12, width:'fit-content' }}>
            {tabs.map(t=>(
              <button key={t.key} onClick={()=>setTab(t.key)}
                style={{ background:tab===t.key?'#fff':'transparent', border:'none', borderRadius:9, padding:'7px 20px', fontSize:14, fontWeight:600, fontFamily:'inherit', color:tab===t.key?t.accent:'#8E8E93', cursor:'pointer', boxShadow:tab===t.key?'0 1px 4px rgba(0,0,0,.1)':'none', display:'flex', alignItems:'center', gap:6, transition:'background .2s,color .2s,box-shadow .2s' }}>
                <span>{t.icon}</span> {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab==='autos'
        ? <TabView key="autos" tab="autos" accent="#007AFF"/>
        : <TabView key="motos" tab="motos" accent="#9B1D6A"/>
      }
    </div>
  )
}
