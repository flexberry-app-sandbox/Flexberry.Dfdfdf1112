package Dfdfdf_1112.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dfdfdf_1112.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Тч
 */
@Entity(name = "IISDfdfdf_1112Тч")
@Table(schema = "public", name = "Тч")
public class Tch {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Ндфл")
    private Double ндфл;

    @Column(name = "Взносы")
    private Double взносы;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetnyjList")
    @Convert("RaschetnyjList")
    @Column(name = "РасчетныйЛист", length = 16, unique = true, nullable = false)
    private UUID _raschetnyjlistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetnyjList", insertable = false, updatable = false)
    private RaschetnyjList raschetnyjlist;


    public Tch() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getНдфл() {
      return ндфл;
    }

    public void setНдфл(Double ндфл) {
      this.ндфл = ндфл;
    }

    public Double getВзносы() {
      return взносы;
    }

    public void setВзносы(Double взносы) {
      this.взносы = взносы;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}