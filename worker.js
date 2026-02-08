export default {
fetch(req,env){
  const {searchParams} = new URL(req.url);
  const uid = searchParams.get("uid");
  const type = searchParams.get("type");

  if(!uid) return json({ok:false,msg:"No user"});

  const reward = +(Math.random()*(0.05-0.01)+0.01).toFixed(2);

  const link = type==="monetag"
   ? "https://YOUR_MONETAG_LINK"
   : "https://YOUR_ADSTERRA_LINK";

  return json({
    ok:true,
    reward,
    link
  });
}};
function json(d){
  return new Response(JSON.stringify(d),
   {headers:{'Content-Type':'application/json'}});
}
