// Soldier
class Soldier {
  constructor(health, strength) {
    this.health=health,
    this.strength=strength,

    this.attack= function() {
        return this.strength;
        }
    this.receiveDamage= function(damage) {
        this.health=health-damage;
      }
      }
  }


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength, attack, receiveDamage)
        this.name=name,
        this.receiveDamage=function(damage) {
            this.health=health-damage;
            if (health>=0) {
                return "${this.name} has received ${this.damage} points of damage"
            }
            else {
                return "${this.name} has died in act of combat"
            }
        }
        this.battleCry=function(){
            return "Odin Owns You All!"
        }
    }
}

// Saxon
class Saxon extends Soldier {
    this.receiveDamage= function (damage){
        if (health>0) {
            return "A Saxon has received ${this.damage} points of damage"
        }
        else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor () {
    this.vikingArmy=[],
    this.saxonArmy=[],

    this.addViking= function (viking) {
        this.vikingArmy.push(viking);
    }

    this.addSaxon= function (saxon) {
        this.saxonArmy.push(saxon);
    }
    
    this.vikingAttack= function () {
        const saxon= saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const viking= vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        saxon.receiveDamage(viking.strength);

        if (saxon.health<=0) {
        this.saxonArmy.splice(this.saxonArmy[saxon])
    }
    return 
    }

    this.saxonAttack= function () {

    }
    this.showStatus= function () {

    }
}
}
