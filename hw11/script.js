const minecraftHero = {
    name: "Крафтерон",
    health: 100,
    armor: 50,
    tool: "алмазний меч",    
    heroInfo: function(){
        console.log("Імя:", minecraftHero.name);
        console.log("Кількість життя:", minecraftHero.health);
        console.log("Кількість броні:", minecraftHero.armor);
        console.log("Зброя:", minecraftHero.tool);
    }
    heroHealth: function(a){
        console.log("Нове життя", minecraftHero.health - a);
    }
}
    minecraftHero.heroInfo();
    minecraftHero.heroHealth(20);

