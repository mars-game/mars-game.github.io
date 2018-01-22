/**
 * Events that can occur when the Outside module is active
 **/
Events.Outside = [
	{ 
	
	 /* Hut fire */
		title: _('Cave in'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.buildings["bunker"]', true) > 0 && $SM.get('game.population', true) > 50;
		},
		scenes: {
			'start': {
				text: [
					_('cave in ocurs in one of the larva tubs, destroying a bunker.'),
					_('all residents in the bunker perished or had to go back into there pods to recover.')
				],
				notification: _('a cave in has happened'),
				blink: true,
				onLoad: function() {
					Outside.destroyHuts(1);
				},
				buttons: {
					'mourn': {
						text: _('mourn'),
						notification: _('some of the crew where knocked out so you put them back in the pods to recover'),
						nextScene: 'end'
					}
				}
			}
		}
	},
	{ /* Sickness */
		title: _('Sickness'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 10 && $SM.get('game.population', true) < 50 && $SM.get('stores.medicine', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					_('a sickness is spreading between the astronauts.'),
					_('medicine is needed immediately.')
				],
				notification: _('some astonaughts are ill'),
				blink: true,
				buttons: {
					'heal': {
						text: _('1 medicine'),
						cost: { 'medicine' : 1 },
						nextScene: {1: 'healed'}
					},
					'ignore': {
						text: _('ignore it'),
						nextScene: {1: 'death'}
					}
				}
			},
			'healed': {
				text: [
					_('the sickness is cured in time.')
				],
				notification: _('sufferers are healed'),
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			},
			'death': {
				text: [
					_('the sickness is spreading between the astronauts.'),
					_('the days are spent with burials.'),
					_('the nights are rent with screams.')
				],
				notification: _('sufferers are left to die'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * Math.floor($SM.get('game.population', true)/2)) + 1;
					Outside.killSettlementrs(numKilled);
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			}
		}
	},

	{ 
			'healed': {
				text: [
					_('the plague is kept from spreading.'),
					_('only a few die.'),
					_('the rest bury them.')
				],
				notification: _('epidemic is eradicated eventually'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 5) + 2;
					Outside.killSettlementrs(numKilled);
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			},
			'death': {
				text: [
					_('the plague rips through the crew.'),
					_('the nights are rent with screams.'),
					_('the only hope is a quick death.')
				],
				notification: _('population is almost exterminated'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 80) + 10;
					Outside.killSettlementrs(numKilled);
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			}
		}
	},

	{ /* insect attack */
		title: _('The Swarm'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					 _('a swarm of large insects emerges from the ground.'),
					 _('the fight is short and bloody, but the bugs are repelled.'),
					 _('the crew retreat to mourn the dead and put the injured in stasis pods to recover.')
				],
				notification: _('a swarm of sand worms attack the tunnels'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 10) + 1;
					Outside.killSettlementrs(numKilled);
				},
				reward: {
					shells: 100,
					meat: 100,
					spines: 10
				},
				blink: true,
				buttons: {
					'end': {
						text: _('go home'),
						notification: _('predators become prey. price is unfair'),
						nextScene: 'end'
					}
				}
			}
		}
	},

	{ /* Soldier attack */
		title: _('The Insects Raid'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 0 && $SM.get('game.cityCleared');
		},
		scenes: {
			'start': {
				text: [
					_('a tremer draws near.'),
					_('a large sand worm emerges from the martion soil.'),
					_('together you manage to drive it away but not without losses.')
				],
				notification: _('a large sand worm emerges'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 40) + 1;
					Outside.killSettlementrs(numKilled);
				},
				reward: {
					/*bullets: 10,*/
					'ration packs': 50
				},

				blink: true,
				buttons: {
					'end': {
						text: _('go home'),
						notification: _('mars can be a dangorose place'),
						nextScene: 'end'
					}
				}
			}
		}
	}

];
