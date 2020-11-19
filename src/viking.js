// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
      console.log(health, this.health)
    }

    attack() {
      return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
  }


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this.name=name
    }
        receiveDamage=function(damage) {
            this.health=this.health-damage;
            if (this.health>=0) {
                return `${this.name} has received ${damage} points of damage`
            }
            else {
                return `${this.name} has died in act of combat`
            }
        }
        battleCry=function(){
            return "Odin Owns You All!"
        }
    }
}

// whats the difference: in class viking i first put "this.receiveD..." and "this.battleCry" and everything inside the constructor

// Saxon
class Saxon extends Soldier {
    receiveDamage= function (damage){
        if (this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor () {
    this.vikingArmy=[],
    this.saxonArmy=[],
    }

    /*should receive 1 argument (a Viking object); should add the received Viking to the army
shouldn't return anything*/

    addViking= function (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon= function (saxon) {
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack= function () {
        const saxon= saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        const viking= vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        saxon.receiveDamage(viking.strength);

        if (saxon.health<=0) {
        this.saxonArmy.splice(this.saxonArmy[saxon])
    }
    return 
    }

    saxonAttack= function () {

    }
    showStatus= function () {

    }
}
}
