import {seed} from './fixtures.js';
const DB='tutorbit-qa',STORE='state',KEY='main';
const clone=x=>structuredClone?structuredClone(x):JSON.parse(JSON.stringify(x));
function open(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function load(){const db=await open();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const r=tx.objectStore(STORE).get(KEY);r.onsuccess=()=>resolve(r.result||clone(seed));r.onerror=()=>reject(r.error)})}
export async function save(state){const db=await open();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(state,KEY);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
export async function reset(){const db=await open();await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(clone(seed),KEY);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});return clone(seed)}
export async function clearAll(){return new Promise((resolve,reject)=>{const r=indexedDB.deleteDatabase(DB);r.onsuccess=resolve;r.onerror=()=>reject(r.error);r.onblocked=resolve})}