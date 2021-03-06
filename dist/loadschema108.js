var loadSchema108 = function () {
    var schema = {

  "title": "TTP",
  "type": "object",
  "options": { "remove_empty_properties" : true },
   
  "properties": {
    "NDM_metadata": {
      "type": "object",
	  "format": "grid",
      "properties": {
        "authority": {
          "type": "string",
		  "options": { "input_width" : "400px" },
          "description": "Creating authority",
          "minLength": 4,
          "default": "org.opennetworking.odwg"
        },
        "type": {
          "type": "string",
          "description": "NDM Type",
          "enum": [
            "TTPv1.1"
          ]
        },
        "name": {
          "type": "string",
		  "options": { "input_width" : "200px" },
          "description": "NDM Name",
          "minLength": 1,
          "default": "Sample"
        },
        "version": {
          "type": "string",
		  "options": { "input_width" : "200px" },
          "description": "NDM Version",
          "minLength": 1,
          "default": "1.0.0"
        },
        "OF_protocol_version": {
          "type": "string",
          "description": "OF Protocol Version",
          "enum": [
            "1.3.0",
            "1.3.1",
            "1.3.2",
            "1.3.3",
            "1.3.4",
            "1.3.5",
            "1.4",
            "1.5"
          ]
        },
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
		  "authority","type","name","version","OF_protocol_version"
	  ]
	},
    "identifiers": {
      "type": "array",
      "format": "tabs",
      "title": "Identifiers",
      "uniqueItems": true,
      "items": {
        "type": "object",
		"title": "ID",
		"properties": {
		  "name": {
			"type": "string"
		  },
		  "type": {
			"type": "string",
			"enum": [
			  "field",
			  "inst",
			  "action",
			  "error"
			],
			"default": "field"
		  },
		  "exp_id": {
			"type": "string"
		  },
		  "exp_code": {
			"type": "string"
		  },
		  "doc": {
			"type" : "array",
			"format": "table",
			"title": "Doc",
			"items": {
			  "type": "string"
			}
		  }
		},
		"required": [
		   "name","type","exp_id","exp_code"
		]
      }
    },
    "variables": {
      "type": "array",
      "format": "tabs",
      "title": "Variables",
      "uniqueItems": true,
      "items": {
		"type": "object",
		"title": "Var",
		"properties": {
		  "name": {
			"type": "string"
		  },
		  "range": {
			"type": "string"
		  },
		  "doc": {
			"type" : "array",
			"format": "table",
			"title": "Doc",
			"items": {
			  "type": "string"
			}
		  }
		}
	  }
	},
    "features": {
      "type": "array",
      "format": "table",
      "title": "Features",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "title": "Feature",
        "properties": {
          "feature": {
            "type": "string"
          },
          "doc": {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "default": [
        {
          "feature": "a_feature",
          "doc": ["Feature's doc"]
        }
      ]
    },
    "table_map": {
      "type": "array",
      "format": "table",
      "title": "Table Map",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "title": "Table",
		"properties": {
		  "name": {
		    "type": "string"
		  },
		  "number": {
		    "type": "number"
		  }
		}
      }
    },
    "fmt_table": {
		"type": "array",
		"title": "FMT Table",
		"items": {
		  "type": "object",
		  "title": "FlowModType",
		  "format": "table",
		  "properties": {
			"name": {
			  "type": "string"
			},
			"doc": {
			  "type" : "array",
			  "title": "Doc",
			  "items": {
				"type": "string"
			  }
			},
			"priority": {
			  "type": "string"
			},
			"match_combos": {
			  "type": "array",
			  "format": "table",
			  "title": "Match Combos",
			  "items": {
				"type": "string"
			  }
			},				
			"inst_combos": {
			  "type": "array",
			  "format": "table",
			  "title": "Instruction Combos",
			  "items": {
				"type": "string"
			  }
			},				
			"match_set": {
			  "type": "array",
			  "format": "table",
			  "title": "Match Set",
			  "items": {
				"type": "object",
				"title": "Match Field",
				"properties": {
				  "field": {
					"type": "string",
					"enum": [
					  "OFPXMT_OFB_ARP_OP",
					  "OFPXMT_OFB_ARP_SHA",
					  "OFPXMT_OFB_ARP_SPA",
					  "OFPXMT_OFB_ARP_THA",
					  "OFPXMT_OFB_ARP_TPA",
					  "OFPXMT_OFB_ETH_DST",
					  "OFPXMT_OFB_ETH_SRC",
					  "OFPXMT_OFB_ETH_TYPE",
					  "OFPXMT_OFB_ICMPV4_CODE",
					  "OFPXMT_OFB_ICMPV4_TYPE",
					  "OFPXMT_OFB_ICMPV6_CODE",
					  "OFPXMT_OFB_ICMPV6_TYPE",
					  "OFPXMT_OFB_IN_PHY_PORT",
					  "OFPXMT_OFB_IN_PORT",
					  "OFPXMT_OFB_IPV4_DST",
					  "OFPXMT_OFB_IPV4_SRC",
					  "OFPXMT_OFB_IPV6_DST",
					  "OFPXMT_OFB_IPV6_EXTHDR",
					  "OFPXMT_OFB_IPV6_FLABEL",
					  "OFPXMT_OFB_IPV6_ND_SLL",
					  "OFPXMT_OFB_IPV6_ND_TARGET",
					  "OFPXMT_OFB_IPV6_ND_TLL",
					  "OFPXMT_OFB_IPV6_SRC",
					  "OFPXMT_OFB_IP_DSCP",
					  "OFPXMT_OFB_IP_ECN",
					  "OFPXMT_OFB_IP_PROTO",
					  "OFPXMT_OFB_METADATA",
					  "OFPXMT_OFB_MPLS_BOS",
					  "OFPXMT_OFB_MPLS_LABEL",
					  "OFPXMT_OFB_MPLS_TC",
					  "OFPXMT_OFB_PBB_ISID",
					  "OFPXMT_OFB_SCTP_DST",
					  "OFPXMT_OFB_SCTP_SRC",
					  "OFPXMT_OFB_TCP_DST",
					  "OFPXMT_OFB_TCP_SRC",
					  "OFPXMT_OFB_TUNNEL_ID",
					  "OFPXMT_OFB_UDP_DST",
					  "OFPXMT_OFB_UDP_SRC",
					  "OFPXMT_OFB_VLAN_PCP",
					  "OFPXMT_OFB_VLAN_VID"
					]
				  },
				  "match_type": {
					"type": "string",
					"enum": ["exact", "mask", "prefix", "all_or_exact"]
				  },
				  "match_flag": {
					"type": "string"
				  },
				  "mask": {
					"type": "string"
				  },
				  "value": {
					"type": "string"
				  },
				  "const_mask": {
					"type": "string"
				  },
				  "const_value": {
					"type": "string"
				  },
				  "doc": {
					"type" : "array",
					"format": "table",
					"title": "Doc",
					"items": {
					  "type": "string"
					}
				  }
				}
			  }
			},
			"instruction_set": {
			  "type": "array",
			  "format": "table",
			  "title": "Instruction Set",
			  "items": {
				"oneOf": [
				  {
					"type": "object",
					"title": "Simple Inst",
					"properties": {
					  "instruction": {
						"type": "string",
						"enum": [
						  "OFPIT_CLEAR_ACTIONS",
						  "OFPIT_EXPERIMENTER",
						  "OFPIT_STAT_TRIGGER"
						]
					  },
					  "inst_flag": {
						  "type": "string"
					  }
					}
				  },
				  {
					"type": "object",
					"title": "Action List Inst",
					"properties": {
					  "instruction": {
						"type": "string",
						"enum": [
						  "OFPIT_APPLY_ACTIONS",
						  "OFPIT_WRITE_ACTIONS"
						]
					  },
					  "action_combos": {
					    "type": "array",
					    "format": "table",
					    "title": "Instruction Combos",
					    "items": {
						  "type": "string"
					    }
					  },				
					  "actions": {
						"type": "array",
						"format": "table",
						"title": "Actions",
						"items": {
						  "type": "object",
						  "title": "Action",
						  "properties": {
							"action": {
							  "type": "string",
							  "enum": [
								"OFPAT_COPY_TTL_IN",
								"OFPAT_COPY_TTL_OUT",
								"OFPAT_DEC_MPLS_TTL",
								"OFPAT_DEC_NW_TTL",
								"OFPAT_EXPERIMENTER",
								"OFPAT_GROUP",
								"OFPAT_OUTPUT",
								"OFPAT_POP_MPLS",
								"OFPAT_POP_PBB",
								"OFPAT_POP_VLAN",
								"OFPAT_PUSH_MPLS",
								"OFPAT_PUSH_PBB",
								"OFPAT_PUSH_VLAN",
								"OFPAT_SET_FIELD",
								"OFPAT_SET_MPLS_TTL",
								"OFPAT_SET_NW_TTL",
								"OFPAT_SET_QUEUE"
							  ]
							},
							"action_flag": {
							  "type": "string"
							},
							"port": {
							  "type": "string"
							},
							"group_id": {
							  "type": "string"
							},
							"queue_id": {
							  "type": "string"
							},
							"ttl": {
							  "type": "string"
							},
							"ethertype": {
							  "type": "string"
							},
							"field": {
							  "type": "string",
							  "enum": [
								  "OFPXMT_OFB_ARP_OP",
								  "OFPXMT_OFB_ARP_SHA",
								  "OFPXMT_OFB_ARP_SPA",
								  "OFPXMT_OFB_ARP_THA",
								  "OFPXMT_OFB_ARP_TPA",
								  "OFPXMT_OFB_ETH_DST",
								  "OFPXMT_OFB_ETH_SRC",
								  "OFPXMT_OFB_ETH_TYPE",
								  "OFPXMT_OFB_ICMPV4_CODE",
								  "OFPXMT_OFB_ICMPV4_TYPE",
								  "OFPXMT_OFB_ICMPV6_CODE",
								  "OFPXMT_OFB_ICMPV6_TYPE",
								  "OFPXMT_OFB_IN_PHY_PORT",
								  "OFPXMT_OFB_IN_PORT",
								  "OFPXMT_OFB_IPV4_DST",
								  "OFPXMT_OFB_IPV4_SRC",
								  "OFPXMT_OFB_IPV6_DST",
								  "OFPXMT_OFB_IPV6_EXTHDR",
								  "OFPXMT_OFB_IPV6_FLABEL",
								  "OFPXMT_OFB_IPV6_ND_SLL",
								  "OFPXMT_OFB_IPV6_ND_TARGET",
								  "OFPXMT_OFB_IPV6_ND_TLL",
								  "OFPXMT_OFB_IPV6_SRC",
								  "OFPXMT_OFB_IP_DSCP",
								  "OFPXMT_OFB_IP_ECN",
								  "OFPXMT_OFB_IP_PROTO",
								  "OFPXMT_OFB_METADATA",
								  "OFPXMT_OFB_MPLS_BOS",
								  "OFPXMT_OFB_MPLS_LABEL",
								  "OFPXMT_OFB_MPLS_TC",
								  "OFPXMT_OFB_PBB_ISID",
								  "OFPXMT_OFB_SCTP_DST",
								  "OFPXMT_OFB_SCTP_SRC",
								  "OFPXMT_OFB_TCP_DST",
								  "OFPXMT_OFB_TCP_SRC",
								  "OFPXMT_OFB_TUNNEL_ID",
								  "OFPXMT_OFB_UDP_DST",
								  "OFPXMT_OFB_UDP_SRC",
								  "OFPXMT_OFB_VLAN_PCP",
								  "OFPXMT_OFB_VLAN_VID"
							  ]
							},
							"value": {
							  "type": "string"
							},
							"doc": {
							  "type" : "array",
							  "format": "table",
							  "title": "Doc",
							  "items": {
								"type": "string"
							  }
							}
						  }
						}
					  }
					  }
				  },
				  {
					"type": "object",
					"title": "Goto Inst",
					"properties": {
					  "instruction": {
						"type": "string",
						"enum": [
						  "OFPIT_GOTO_TABLE"
						]
					  },
					  "table": {
						"type": "string"
					  }
					}
				  },
				  {
					"type": "object",
					"title": "Metadata Inst",
					"properties": {
					  "instruction": {
						"type": "string",
						"enum": [
						  "OFPIT_WRITE_METADATA"
						]
					  },
					  "metadata": {
						"type": "integer"
					  },
					  "metadata_mask": {
						"type": "integer"
					  }
					}
				  }
				]
			  }
			}
		  }
		}
    },
    "meter_table": {
      "type": "object",
      "title": "Meter Table",
      "properties": {
        "meter_types": {
          "type": "array",
          "format": "table",
          "title": "Meter Types",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "title": "Meter Type",
            "properties": {
              "name": {
                "type": "string"
              },
              "bands": {
                "type": "array",
                "format": "table",
                "title": "Bands",
                "uniqueItems": true,
                "items": {
                  "type": "object",
                  "title": "Band",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "rate": {
                      "type": "string"
                    },
                    "burst": {
                      "type": "string"
                    },
                    "doc":  {
                      "type" : "array",
                      "format": "table",
                      "title": "Doc",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "built_in_meters": {
          "type": "array",
          "format": "table",
          "title": "Built In Meters",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "title": "Built In Meter",
            "properties": {
              "name": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "bands": {
                "type": "array",
                "format": "table",
                "title": "Bands",
                "uniqueItems": true,
                "items": {
                  "type": "object",
                  "title": "Band",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "rate": {
                      "type": "string"
                    },
                    "burst": {
                      "type": "string"
                    },
                    "doc":  {
                      "type" : "array",
                      "format": "table",
                      "title": "Doc",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "doc":  {
                "type" : "array",
                "format": "table",
                "title": "Doc",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        },
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "flow_tables": {
      "type": "array",
      "title": "Flow Tables",
      "items": {
        "type": "object",
		"format": "grid",
        "title": "Flow Table",
        "properties": {
          "name": {
            "type": "string"
          },
          "doc": {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string"
            }
          },
          "flow_mod_types": {
            "type": "array",
            "items": {
              "type": "string"
			}
	      },
          "built_in_flow_mods": {
            "type": "array",
            "items": {
              "type": "string"
			}
	      }
		}
	  }
    },
    "group_entry_types": {
      "type": "object",
      "title": "Group Entry Types",
      "properties": {
        "name": {
          "type": "string"
        },
        "group_type": {
          "type": "string",
          "enum": [
            "OFPGT_ALL", "OFPGT_SELECT", "OFPGT_INDIRECT", "OFPGT_FF"
          ]
        },
        "bucket_types": {
          "type": "array",
          "format": "table",
          "title": "Bucket Types",
          "items": {
            "type": "object",
            "title": "Bucket",
            "properties": {
              "name": {
                "type": "string"
              },
              "action_set": {
                "type": "array",
                "format": "table",
                "title": "Action List",
                "items": {
                  "type": "object",
                  "title": "Action",
                  "properties": {
                    "action": {
                      "type": "string",
                      "enum": [
						"OFPAT_COPY_TTL_IN",
						"OFPAT_COPY_TTL_OUT",
						"OFPAT_DEC_MPLS_TTL",
						"OFPAT_DEC_NW_TTL",
						"OFPAT_EXPERIMENTER",
						"OFPAT_GROUP",
						"OFPAT_OUTPUT",
						"OFPAT_POP_MPLS",
						"OFPAT_POP_PBB",
						"OFPAT_POP_VLAN",
						"OFPAT_PUSH_MPLS",
						"OFPAT_PUSH_PBB",
						"OFPAT_PUSH_VLAN",
						"OFPAT_SET_FIELD",
						"OFPAT_SET_MPLS_TTL",
						"OFPAT_SET_NW_TTL",
						"OFPAT_SET_QUEUE"
                      ]
                    },
                    "port": {
                      "type": "string"
                    },
                    "group_id": {
                      "type": "string"
                    },
                    "queue_id": {
                      "type": "string"
                    },
                    "ttl": {
                      "type": "string"
                    },
                    "ethertype": {
                      "type": "string"
                    },
                    "field": {
                      "type": "string",
                      "enum": [
						  "OFPXMT_OFB_ARP_OP",
						  "OFPXMT_OFB_ARP_SHA",
						  "OFPXMT_OFB_ARP_SPA",
						  "OFPXMT_OFB_ARP_THA",
						  "OFPXMT_OFB_ARP_TPA",
						  "OFPXMT_OFB_ETH_DST",
						  "OFPXMT_OFB_ETH_SRC",
						  "OFPXMT_OFB_ETH_TYPE",
						  "OFPXMT_OFB_ICMPV4_CODE",
						  "OFPXMT_OFB_ICMPV4_TYPE",
						  "OFPXMT_OFB_ICMPV6_CODE",
						  "OFPXMT_OFB_ICMPV6_TYPE",
						  "OFPXMT_OFB_IN_PHY_PORT",
						  "OFPXMT_OFB_IN_PORT",
						  "OFPXMT_OFB_IPV4_DST",
						  "OFPXMT_OFB_IPV4_SRC",
						  "OFPXMT_OFB_IPV6_DST",
						  "OFPXMT_OFB_IPV6_EXTHDR",
						  "OFPXMT_OFB_IPV6_FLABEL",
						  "OFPXMT_OFB_IPV6_ND_SLL",
						  "OFPXMT_OFB_IPV6_ND_TARGET",
						  "OFPXMT_OFB_IPV6_ND_TLL",
						  "OFPXMT_OFB_IPV6_SRC",
						  "OFPXMT_OFB_IP_DSCP",
						  "OFPXMT_OFB_IP_ECN",
						  "OFPXMT_OFB_IP_PROTO",
						  "OFPXMT_OFB_METADATA",
						  "OFPXMT_OFB_MPLS_BOS",
						  "OFPXMT_OFB_MPLS_LABEL",
						  "OFPXMT_OFB_MPLS_TC",
						  "OFPXMT_OFB_PBB_ISID",
						  "OFPXMT_OFB_SCTP_DST",
						  "OFPXMT_OFB_SCTP_SRC",
						  "OFPXMT_OFB_TCP_DST",
						  "OFPXMT_OFB_TCP_SRC",
						  "OFPXMT_OFB_TUNNEL_ID",
						  "OFPXMT_OFB_UDP_DST",
						  "OFPXMT_OFB_UDP_SRC",
						  "OFPXMT_OFB_VLAN_PCP",
						  "OFPXMT_OFB_VLAN_VID"
                      ]
                    },
                    "value": {
                      "type": "string"
                    },
                    "doc":  {
                      "type" : "array",
                      "format": "table",
                      "title": "Doc",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "doc":  {
                "type" : "array",
                "format": "table",
                "title": "Doc",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        },
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "packet_out": {
      "type": "array",
      "format": "table",
      "title": "Packet Out",
      "items": {
        "type": "array",
        "format": "table",
        "title": "Action List",
        "items": {
          "type": "object",
          "title": "Action",
          "properties": {
            "action": {
              "type": "string",
              "enum": [
				"OFPAT_COPY_TTL_IN",
				"OFPAT_COPY_TTL_OUT",
				"OFPAT_DEC_MPLS_TTL",
				"OFPAT_DEC_NW_TTL",
				"OFPAT_EXPERIMENTER",
				"OFPAT_GROUP",
				"OFPAT_OUTPUT",
				"OFPAT_POP_MPLS",
				"OFPAT_POP_PBB",
				"OFPAT_POP_VLAN",
				"OFPAT_PUSH_MPLS",
				"OFPAT_PUSH_PBB",
				"OFPAT_PUSH_VLAN",
				"OFPAT_SET_FIELD",
				"OFPAT_SET_MPLS_TTL",
				"OFPAT_SET_NW_TTL",
				"OFPAT_SET_QUEUE"
              ]
            },
            "port": {
              "type": "string"
            },
            "group_id": {
              "type": "string"
            },
            "queue_id": {
              "type": "string"
            },
            "ttl": {
              "type": "string"
            },
            "ethertype": {
              "type": "string"
            },
            "field": {
              "type": "string",
              "enum": [
				  "OFPXMT_OFB_ARP_OP",
				  "OFPXMT_OFB_ARP_SHA",
				  "OFPXMT_OFB_ARP_SPA",
				  "OFPXMT_OFB_ARP_THA",
				  "OFPXMT_OFB_ARP_TPA",
				  "OFPXMT_OFB_ETH_DST",
				  "OFPXMT_OFB_ETH_SRC",
				  "OFPXMT_OFB_ETH_TYPE",
				  "OFPXMT_OFB_ICMPV4_CODE",
				  "OFPXMT_OFB_ICMPV4_TYPE",
				  "OFPXMT_OFB_ICMPV6_CODE",
				  "OFPXMT_OFB_ICMPV6_TYPE",
				  "OFPXMT_OFB_IN_PHY_PORT",
				  "OFPXMT_OFB_IN_PORT",
				  "OFPXMT_OFB_IPV4_DST",
				  "OFPXMT_OFB_IPV4_SRC",
				  "OFPXMT_OFB_IPV6_DST",
				  "OFPXMT_OFB_IPV6_EXTHDR",
				  "OFPXMT_OFB_IPV6_FLABEL",
				  "OFPXMT_OFB_IPV6_ND_SLL",
				  "OFPXMT_OFB_IPV6_ND_TARGET",
				  "OFPXMT_OFB_IPV6_ND_TLL",
				  "OFPXMT_OFB_IPV6_SRC",
				  "OFPXMT_OFB_IP_DSCP",
				  "OFPXMT_OFB_IP_ECN",
				  "OFPXMT_OFB_IP_PROTO",
				  "OFPXMT_OFB_METADATA",
				  "OFPXMT_OFB_MPLS_BOS",
				  "OFPXMT_OFB_MPLS_LABEL",
				  "OFPXMT_OFB_MPLS_TC",
				  "OFPXMT_OFB_PBB_ISID",
				  "OFPXMT_OFB_SCTP_DST",
				  "OFPXMT_OFB_SCTP_SRC",
				  "OFPXMT_OFB_TCP_DST",
				  "OFPXMT_OFB_TCP_SRC",
				  "OFPXMT_OFB_TUNNEL_ID",
				  "OFPXMT_OFB_UDP_DST",
				  "OFPXMT_OFB_UDP_SRC",
				  "OFPXMT_OFB_VLAN_PCP",
				  "OFPXMT_OFB_VLAN_VID"
              ]
            },
            "value": {
              "type": "string"
            },
            "doc":  {
              "type" : "array",
              "format": "table",
              "title": "Doc",
              "items": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "parameters": {
      "type": "array",
      "format": "table",
      "title": "Parameters",
      "items": {
        "type": "object",
        "title": "Parameter",
        "properties": {
          "name": {
            "type" : "string"
          },
          "type": {
            "type" : "string"
          },
          "default": {
            "type" : "string"
          },
          "doc":  {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "flow_paths": {
      "type": "array",
      "format": "table",
      "title": "Flow Paths",
      "items": {
        "type": "object",
        "title": "Flow Path Item",
        "properties": {
          "name":  {
            "type" : "string"
          },
          "path":  {
            "type" : "array",
            "format": "table",
            "title": "Paths",
            "items": {
              "type": "string",
              "title": "Path"
            }
          },
          "no-path":  {
            "type" : "array",
            "format": "table",
            "title": "No Paths",
            "items": {
              "type": "string",
              "title": "No Path Item"
            }
          },
          "doc":  {
            "type" : "array",
            "format": "table",
            "title": "Doc",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "security": {
      "type": "object",
      "title": "Security",
      "properties": {
        "doc": {
          "type" : "array",
          "format": "table",
          "title": "Doc",
          "items": {
            "type": "string",
          }
        }
      }
    }
  }
}
    return schema;
}